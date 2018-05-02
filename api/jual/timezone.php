<?php

#date_default_timezone_set("Asia/Jakarta");

#echo date_default_timezone_get();

$data =  getdate(date("U"));

$tm = $data["hours"];

if($tm > 6 && $tm < 15 ) echo "benar";
else echo "salah";

echo ($tm < "6");

?>
