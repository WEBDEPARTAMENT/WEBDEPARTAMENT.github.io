<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type');
if ($_POST) {
	file_get_contents('https://api.telegram.org/bot353262962:AAGMjEsJuScatYdxvp-NyAAcjeseL-n1dC8/sendMessage?chat_id=-276005747&text=Имя: '.$_POST['name'].', Email: '.$_POST['phonenumber']);
} else {
	echo 'Форма пустая';
}
?>