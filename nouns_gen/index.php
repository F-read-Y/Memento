<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="styles.css">
	<title>Генератор существительных</title>
</head>
<body>
	<?php
		$nouns = file('nouns.txt');
	?>

	<div class="data" data-nouns='<?php
		for ($i = 0; $i < 1000; $i++) {
			echo $nouns[$i];
		}

	?>'></div>

	<ol class="nouns_list"></ol>
	<button class="check">check</button>

	<div class="result"></div>


	<script src="script.js"></script>
</body>
</html>