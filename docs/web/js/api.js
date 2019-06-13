const host = "http://localhost:8000";

class UApi {
	static async loadManifest() {
		return new Promise((resolve, reject) => {
			$.getJSON( `${host}/api/get/plugins`, function( data ) {
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
			}).done(() => {
				resolve();
			}).fail(() => {
				reject();
			});
		});
	}

	static async checkToken(token) {
		return new Promise((resolve, reject) => {
			if (!token) {
				reject(false);
			}

			data = {  token };
	
			$.ajax({
				type: "POST",
				url: `${host}/api/auth/check`,
				data: data,
				dataType: "json",
				success: (result) => {
					if (!result.error) {
						resolve(true);
					}

					resolve(false);
				}
			  });
		});
	}
}


