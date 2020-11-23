<?php


$email_headers  = "Content-type: text/html; charset=UTF-8 \r\n";
$title = "Заявка";
$description = "<p>ім`я: {$_REQUEST["name"]}</p><p>номер телефону: {$_REQUEST["phone"]}</p>";


$res = mail($address = "Robota.e.ua@gmail.com", $title, $description, $email_headers);

header('Location: thanks.php');