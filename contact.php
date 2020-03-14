<?php

if($_POST["submit"]) {
    $recipient="anshulspartan141@gmail.com";
    $subject="Contact Mail";
    $sender=$_POST["full-name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>