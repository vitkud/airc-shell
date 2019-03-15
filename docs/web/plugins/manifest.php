<?
	$manifests = array();

	$dirname = getcwd();
	
	if ($handle = opendir($dirname)) {
		/* Именно этот способ чтения элементов каталога является правильным. */
		while (false !== ($file = readdir($handle))) { 
			if (is_dir($dirname . '/' . $file)) {
				if (file_exists($dirname . '/' . $file . '/manifest.json')) {
					$manifests[] = json_decode(file_get_contents($dirname . '/' . $file . '/manifest.json'));
				}
			}
		}
		
		closedir($handle); 
	}
	//echo 'result manifest: <br>';
	//echo $manifest_str;
	die(json_encode(["plugins" => $manifests]));
?>