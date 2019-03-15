<html lang="en">
    <head>
        <title>Untill Air Shell - Home page</title>
        
        <link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="https://raw.githubusercontent.com/untillpro/untill-air-shell/master/base/css/untill-base.css" />
		
		
		<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="https://raw.githubusercontent.com/untillpro/untill-air-shell/master/base/js/untill-base.js"></script>
		<script src="/js/api.js?v=<?=date('U')?>"></script>
    </head>

    <body>
        <div class="--container">
            <div class="--wrapper">
                <div class="ushell-container">
                    <div class="ushell-header">
                        <div class="ushell-header-logo">
                            <a href="main.html">
                                <img src="img/logo.svg">
                            </a>
                        </div>

                        <div class="ushell-header-nav">
                            <nav class="ushell-header-nav-activity-bar" id="sidebar">
                                
                            </nav>
                        </div>

                        <div class="ushell-header-action-pane">
                            <a class="">
                                task manager
                            </a>

                            <a class="">
                                notifications
                            </a>

                            <a class="">
                                user
                            </a>
                        </div>
                    </div>

                    <div class="ushell-working-area">
                        <iframe id="plugin-manager" onload="resizeIframe(this)"></iframe>
                    </div>

                    <div class="ushell-footer">

                    </div>
                </div>
            </div>
        </div>
		
		<div class="--loading">
			<div class="--logo-prelaoder">
				<img src="/img/logo-rounded.svg">
			</div>
		</div>
    </body>
</html>