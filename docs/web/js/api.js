const loadManifest = () => {
	$.getJSON( "/plugins/manifest.php", function( data ) {
		if (data && data.plugins && data.plugins.length > 0) {
			const ul = $('<ul>').appendTo('#sidebar');
			
			data.plugins.forEach(plugin => {
				const li = $('<li>').appendTo(ul);
				
				$('<a>').attr({ href: `${plugin.code}/`,"data-href": plugin.url, "class": "plugin-link", "data-code": plugin.code}).text(plugin.name).on('click', function(e) {
					e.preventDefault();
					
					$('#plugin-manager').attr({
						src: $(this).attr('data-href')
					});
					
					var iframe = document.getElementById('plugin-manager');
					
					var iframeDoc = iframe.contentWindow.document;

					$(iframeDoc).ready(function() {
						$(iframe).height($(iframeDoc).height());
					});
					
					return false;
				}).appendTo(li);
			});

		}
	}).fail(() => {
		alert("Can't load plugins manifest.");
	});
};

const resizeIframe = (iframe) => {
	setIframeHeight(iframe);
}

function setIframeHeight(ifrm){
    var doc = ifrm.contentDocument? ifrm.contentDocument:
    ifrm.contentWindow.document;
    var RestHeight=ifrm.style.height; //Capture original height see why below.
    ifrm.style.visibility = "hidden";
    ifrm.style.height = "10px"; //Necessary to work properly in some browser eg IE
    var NewHeight = getDocHeight( doc ) + 10;
    if (NewHeight>20){
        ifrm.style.height=NewHeight + "px";
    } else { //if dom returns silly height value put back old height see above.
        ifrm.style.height=RestHeight + "px";
    }
    ifrm.style.visibility = "visible";
}

const getDocHeight = (doc) => {
	if (!doc) return 0;
	
	var body = doc.body, html = doc.documentElement;

    
    var height = Math.min( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	
    return height;
}



$(() => {
	loadManifest();
	
	setInterval(() => {
		resizeIframe(document.getElementById('plugin-manager'));
	}, 50);
});

