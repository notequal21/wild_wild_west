<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Subject";

$c = true;

$title = "Application from the site";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Email settings
  $mail->Host       = 'hostde18.fornex.host'; // SMTP 
  $mail->Username   = 'hello2@notequal.website'; // Login
  $mail->Password   = '6abJoH^B5Xn7@Yvs'; // Email password
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465; 

  $mail->setFrom('hello2@notequal.website', 'Application from the site'); 

  // Recipient of the letter
  $mail->addAddress('ki-rya@inbox.ru');
  $mail->addAddress('kalorigen@gmail.com');
  $mail->addAddress('cryptophantha@gmail.com');

  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}