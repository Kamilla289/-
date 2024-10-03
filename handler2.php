<?php
$user_email = $_POST["useremail"];

$token = "6632009151:AAEvgwc5QOtxEzuE4XlK91GpiFufzCSgAZs";
$chat_id = "-4550241662";

$formDataEmail = array(
  "Email: " => $user_email
);


if(!isset($text))  //Добавила, так как text был необъявлен и выдавал ошибку при отправке формы
    $text = '';    //Добавила, так как text был необъявлен и выдавал ошибку при отправке формы

echo $text;        //Добавила, так как text был необъявлен и выдавал ошибку при отправке формы


foreach($formDataEmail as $key => $value) {
  $text .= $key . "<b>" . urlencode($value) . "</b>" . "%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");

if ($sendToTelegram) {
  echo "Success";
} else {
  echo "Error";
}

echo "Ваш Email: <b>" . $user_email . "</b>";