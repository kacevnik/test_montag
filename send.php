<?php

require 'phpmailer/class.phpmailer.php';


// ==== Принудительный захват массива переменных ==========================
// ==== раскомментировать, если письма отправляются без значений полей ====

$adninEmail = 'otoplenie.nsk54@gmail.com';
$email = $_POST['email']; if($email){$textEmail = 'Email пользователя: '.$email.'<br>';}
$phone = $_POST['phone']; if($phone){$phone = 'Телефон пользователя: '.$phone.'<br>';}
$test = $_POST['test']; if($test){$test = 'Результаты тестирования: <br><i>'.$test.'</i>';}
$form = $_POST['hidden'];
$id = $_POST['id'];

//Create a new PHPMailer instance
$mail = new PHPMailer;

$mail->CharSet = 'UTF-8';
// От кого
$mail->setFrom($adninEmail, 'Новое Тестирование');

// Кому
$mail->addAddress($adninEmail, $adninEmail);

// Тема
$mail->Subject = $form;

// convert HTML into a basic plain-text alternative body
$mail->msgHTML($name.$textEmail.$phone.$test);


if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
   echo $test;
}
//Письмо лиду----------------------------------------
if($lid == 1){
	$mail = new PHPMailer;

	$mail->CharSet = 'UTF-8';
	// От кого
	$mail->setFrom($adninEmail, $adninEmail);

	// Кому
	$mail->addAddress($email, $email);

	// Тема
	$mail->Subject = 'Результаты теста по отоплению';

	// convert HTML into a basic plain-text alternative body
	$mail->msgHTML('<p>Здравствуйте.</p><p>Мы уже подобрали 3 подходящих проекта, и в ближайшее время их Вам отправим.
А пока, что Вы можете ознакомиться с нашей книгой:</p><p><a href="http://newbani.bani-nsk54.ru/index-tr.html">Книгу “5 роковых ошибок при строительстве бани”</a></p>');


	if (!$mail->send()) {
	    echo "Mailer Error: " . $mail->ErrorInfo;
	} else {
	   echo $test;
	}
}