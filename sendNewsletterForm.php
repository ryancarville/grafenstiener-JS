<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "ryancarville@gmail.com";
    $email_subject = "Newletter Request from Gräfensteiner.com";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    
 
     
    
    $lastName = $_POST['lastName']; // required
    $firstName = $_POST['firstName']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message'];

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($email_exp,$email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    
  if(!preg_match($string_exp,$lastName)) {
    $error_message .= 'The last name you entered does not appear to be valid.<br />';
  }

  if(!preg_match($string_exp,$firstName)) {
    $error_message .= 'The first name you entered does not appear to be valid.<br />';
  }

 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Newsletter Form details below.\n\n";
 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Last Name: ".clean_string($lastName)."\n";
    $email_message .= "First Name: ".clean_string($firstName)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
 
// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
$success = @mail($email_to, $email_subject, $email_message, $headers);  

}
if($success){
  echo "Message Sent";
}

?>
 