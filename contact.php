<?php

if (isset($_POST['name']) && !empty($_POST['name'])) {
  $name = addslashes($_POST['name']);
  $email = addslashes($_POST['email']);
  $telephone = addslashes($_POST['telephone']);
  $msg = addslashes($_POST['message']);
  $subject = "Email do site";

  $header = "From: contatoteste@micromyn.com" . "\r\n"
    . "Reply-To: " . $email . "\r\n"
    . "X-Mailer: PHP/" . phpversion();

  $to = "contatoteste@micromyn.com";
  $body = "Nome: " . $name . " - E-mail: " . $email . " - Telefone: " . $telephone . " - Mensagem: " . $msg;
  mail($to, $subject, $body, $header);
  echo "teste";
  exit;
}
