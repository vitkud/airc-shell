
const initDom = () => {
    $.getJSON('config.json', (data) => {
        if (data.ui_version) {
            $("#ui_version").text(data.ui_version);
        }

        if (data.untill_version) {
            $("#inst_version").text(data.untill_version);
        }
    });

    $("#dateyear").text(new Date().getFullYear());
};

const initIfrm = () => {
    const ifrm = document.getElementById('plugin-manager');

    if (ifrm) {
        setInterval(() => {
            resizeIframe(document.getElementById('plugin-manager'));
        }, 50);
    }
};

const resizeIframe = (iframe) => {
	setIframeHeight(iframe);
}

function setIframeHeight(ifrm){
    var doc = ifrm.contentDocument? ifrm.contentDocument:
    ifrm.contentWindow.document;

    var RestHeight=ifrm.style.height;
    ifrm.style.visibility = "hidden";
    ifrm.style.height = "10px";
    var NewHeight = getDocHeight( doc ) + 10;

    if (NewHeight>20){
        ifrm.style.height=NewHeight + "px";
    } else {
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

const loadFinish = () => {
    
};

$(() => {
    initDom();
    initIfrm();

	UApi.loadManifest()
		.then(() => {
			loadFinish();
		})
		.catch((e) => {

		});

});