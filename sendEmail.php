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
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email'])) {
        died(alert('We are sorry, but there appears to be a problem with the form you submitted.'));       
    }
 
     
 
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $streetNum = $_POST['streetNum'];
    $zipCode = $_POST['zipCode'];
    $city = $_POST['city'];
    $canton = $_POST['canton'];
    $country = $_POST['country'];
    $newletter = $_POST['newsletter'];
    $message = $_POST['message'];
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email)) {
    $error_message .= alert('The Email Address you entered does not appear to be valid.<br />');
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
    $error_message .= alert('The Name you entered does not appear to be valid.<br />');
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
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
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
 
}
?>