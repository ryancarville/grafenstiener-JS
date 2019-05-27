<?php

if(isset($_POST['email'])) {
 
  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "ryancarville@gmail.com";
  $email_subject = "Email from Gräfensteiner.com";

  function died($error) {
      // your error code can go here
      echo "We are very sorry, but there were error(s) found with the form you submitted. ";
      echo "These errors appear below.<br /><br />";
      echo $error."<br /><br />";
      echo "Please go back and fix these errors.<br /><br />";
      die();
  }
 
 
  
 
     
  $gender = $_POST['gender'];
  $lastName = $_POST['lastName']; // required
  $firstName = $_POST['firstName']; // required
  $company = $_POST['company']; 
  $email = $_POST['email']; // required
  $phone = $_POST['phone']; // required
  $street = $_POST['street']; // required
  $streetNum = $_POST['streetNum']; // required
  $zipCode = $_POST['zipCode']; // required
  $city = $_POST['city']; // required
  $canton = $_POST['canton']; // required
  $country = $_POST['country']; // required
  $newletter = $_POST['newsletter']; 
  $message = $_POST['message'];

  $error_message = "";
  
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  $string_exp = "/^[A-Za-z .'-]+$/";
  $phoneNum_exp = "/^[0-9]{0,15}$/";
  $houseNum_exp = "/^[0-9]{0,15}$/";
  if(!preg_match($string_exp,$lastName)) {
    $error_message .= 'The last name you entered does not appear to be valid.<br />';
  }

  if(!preg_match($string_exp,$firstName)) {
    $error_message .= 'The first name you entered does not appear to be valid.<br />';
  }

  if(!preg_match($email_exp,$email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }

  if(!preg_match($phoneNum_exp,$phone)) {
    $error_message .= 'The phone number you entered does not appear to be valid.<br />';
  }

  if(!preg_match($string_exp,$street)) {
    $error_message .= 'The street name you entered does not appear to be valid.<br />';
  }

  if(!preg_match($houseNum_exp,$streetNum)) {
    $error_message .= 'The street number you entered does not appear to be valid.<br />';
  }

  if(!preg_match($string_exp,$city)) {
    $error_message .= 'The city you entered does not appear to be valid.<br />';
  }

  if(!preg_match($string_exp,$canton)) {
    $error_message .= 'The canton you entered does not appear to be valid.<br />';
  }

  if(!preg_match($string_exp,$country)) {
    $error_message .= 'The country you entered does not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
  $email_message = "Form details below.\n\n";
 
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
 
  
  $email_message .= "Gender: ".clean_string($gender)."\n";
  $email_message .= "Last Name: ".clean_string($lastName)."\n";
  $email_message .= "First Name: ".clean_string($firstName)."\n";
  $email_message .= "Email: ".clean_string($email)."\n";
  $email_message .= "Company: ".clean_string($company)."\n";
  $email_message .= "Telephone: ".clean_string($phone)."\n";
  $email_message .= "Street: ".clean_string($street)."\n";
  $email_message .= "House Number: ".clean_string($streetNum)."\n";
  $email_message .= "Zip Code: ".clean_string($zipCode)."\n";
  $email_message .= "City: ".clean_string($city)."\n";
  $email_message .= "Canton: ".clean_string($canton)."\n";
  $email_message .= "Country: ".clean_string($country)."\n";
  $email_message .= "News Letter: ".clean_string($newletter)."\n";
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