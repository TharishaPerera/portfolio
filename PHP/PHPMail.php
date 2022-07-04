<?php
    if(isset($_POST['submit'])){
        $name = $_POST['Name'];
        $email = $_POST['Email'];
        $subject = $_POST['Subject'];
        $body = $_POST['Body'];

        $to = 'tharishaperera@gmail.com';
        $mailSubject = 'Message From Portfolio';
        $emailBody = "Message from contact us page<br>";
        $emailBody .= "<b>From:<b> {$name} <br>";
        $emailBody .= "<b>Subject:<b> {$subject} <br>";
        $emailBody .= "<b>Message:<b><br>".nl2br(strip_tags($body));

        $header = "From: {$email}\r\nContent-Type: text/html;";

        $sendMailResult = mail($to, $mailSubject, $emailBody, $header);

        if($sendMailResult){
            echo '<script language="javascript">';
            echo 'alert("Message sent successfully.")';
            echo '</script>';
        }
        else{
            echo '<script language="javascript">';
            echo 'alert("Message send unsuccessfull.")';
            echo '</script>';
        }
        header("Location: https://tharishaperera.github.io/portfolio");
    }
?>
