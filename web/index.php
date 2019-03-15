<html>
	<head>
		<link rel="stylesheet" href="/css/style.css">
		
		<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="/js/api.js?v=<?=date('U')?>"></script>
	</head>
	<body>
		<div class="wrapper">
			<div id="sidebar" class="sidebar">
			
			</div>
			
			<div id="workspace" class="workspace">
				<iframe id="plugin-manager" onload="resizeIframe(this)" scrolling="no"></iframe>
			</div>
		</div>
	</body>
</html>