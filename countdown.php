<?php 
	$date=strtotime("March 3, 2015 1:00 PM");
	echo "<p>Date $date</p>";
	echo 'Nombres de jours restant :'.floor(($date-time())/86400);