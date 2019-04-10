<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $POST['address'];
    $phoneNum = $POST['phoneNum'];
    $message = $POST['message'];
    $newsletter = $POST['newsletter'];
    $from = 'From: $name';
    $to = 'ryancarville@gmail.com';
    $subject = 'New Inquery from Website';

    $body = "From: $name\n E-Mail: $email\n Address: $address\n Phone Number: $phoneNum\n Newsletter: $newsletter\n Message: $message";

    if ($_POST['submit']){
        if(mail ($to, $subject, $body)){
            echo '<p>Your messages has been sent!</p>';
        } else{
            echo '<p>Something went wrong.  Please try again.</p>';
        }
    }
?>