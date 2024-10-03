<?php
$user_phone = $_POST["userphone"];

$token = "6632009151:AAEvgwc5QOtxEzuE4XlK91GpiFufzCSgAZs";
$chat_id = "-4550241662";

$formData = array(
  "Телефон: " => $user_phone
);


if(!isset($text))  //Добавила, так как text был необъявлен и выдавал ошибку при отправке формы
    $text = '';    //Добавила, так как text был необъявлен и выдавал ошибку при отправке формы

echo $text;        //Добавила, так как text был необъявлен и выдавал ошибку при отправке формы


foreach($formData as $key => $value) {
  $text .= $key . "<b>" . urlencode($value) . "</b>" . "%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");

if ($sendToTelegram) {
  echo "Success";
} else {
  echo "Error";
}

echo "Ваш телефон: <b>" . $user_phone . "</b>";