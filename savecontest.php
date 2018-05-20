<?php
date_default_timezone_set('GMT');
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
require 'PHPMailer/PHPMailerAutoload.php';

$db = parse_ini_file("database.ini");

$servername = $db['host'];
$username = $db['user'];
$password = $db['pass'];
$dbname = $db['name'];
$sql = "";
$htmlmess = "";

$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$nric_passport = filter_var($_POST['nric_passport'], FILTER_SANITIZE_STRING);
$mobile = filter_var($_POST['mobile'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$uploaded_file_path = filter_var($_POST['uploaded_file_path'], FILTER_SANITIZE_STRING);
$when_photo_taken = filter_var($_POST['when_photo_taken'], FILTER_SANITIZE_NUMBER_INT);
$share_your_thoughts = filter_var($_POST['share_your_thoughts'], FILTER_SANITIZE_STRING);

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  // print_r($conn); exit();
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "INSERT INTO contest (name, nric_passport, mobile, email, uploaded_file_path, when_photo_taken, share_your_thoughts) VALUES ('".$name."', '".$nric_passport."', '".$mobile."', '".$email."', '".$uploaded_file_path."', '".$when_photo_taken."', '".$share_your_thoughts."')";
  // use exec() because no results are returned
  $conn->exec($sql);
  echo "success";
}
catch(PDOException $e)
{
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;

$mail = new PHPMailer(true);  
                            // Passing `true` enables exceptions
try {
    //Server settings
    // $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    // $mail->isSMTP();                                      // Set mailer to use SMTP
    // $mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
    // $mail->SMTPAuth = true;                               // Enable SMTP authentication
    // $mail->Username = 'user@example.com';                 // SMTP username
    // $mail->Password = 'secret';                           // SMTP password
    // $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    // $mail->Port = 587;                                    // TCP port to connect to

    $counter = 0;

    foreach ($_POST as $key=>$val) {
      if($key!="uploaded_file_path" && $key!="terms_and_conditions") {
        $value = $val;
        if(is_array($val)){
          $value=implode(",",$val);
        }
        $fieldnames = ['Name', 'NRIC/Passport Number', 'Mobile Number', 'Email Address', 'When was this photo taken', 'Share with us your thoughts on the submitted photo'];
        $htmlmess .= $fieldnames[$counter].": ".$value."\n";

        $counter++;
      }
    }

    //Recipients
    $mail->setFrom('SPPLcorpcomms@gmail.com', 'Singapore Pools');
    $mail->addAddress('SPPLcorpcomms@gmail.com', 'Singapore Pools');     // Add a recipient
    $mail->addReplyTo('SPPLcorpcomms@gmail.com', 'Singapore Pools');

    //Attachments
    $mail->addAttachment($uploaded_file_path, 'photo.jpg');    // Optional name

    //Content
    $mail->isHTML(false);                                  // Set email format to HTML
    $mail->Subject = 'New SG Pools 50 Contest Entry';
    $mail->Body    = $htmlmess;
    // $mail->AltBody = '';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

$mail = new PHPMailer(true);  

try {
    //Server settings
    // $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    // $mail->isSMTP();                                      // Set mailer to use SMTP
    // $mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
    // $mail->SMTPAuth = true;                               // Enable SMTP authentication
    // $mail->Username = 'user@example.com';                 // SMTP username
    // $mail->Password = 'secret';                           // SMTP password
    // $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    // $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('SPPLcorpcomms@gmail.com', 'Singapore Pools');
    $mail->addAddress($email, $name);     // Add a recipient
    $mail->addReplyTo('SPPLcorpcomms@gmail.com', 'Singapore Pools');

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Thank you for joining our SG Pools 50 contest!';
    $mail->Body    = '<p>Hi '.$name.',</p><p>Thank you for joining our Singapore Pools 50th anniversary contest. This is to notify you that your entry has been received by Singapore Pools.</p><p>The 50 Contest Winner(s) will be selected through a computerised balloting system. The Winner(s) will be announced on our <a href="https://sgpools50.com/contest.html">website</a> and Winner(s) will be contacted on the prize collection details by 6th June 2018.</p><p>For more information regarding the contest, please read our <a href="http://sgpools50.com/contest.html#terms">terms and conditions</a> or <a href="mailto:CorporateComms@sgpoolz.com.sg">email</a> us directly.</p>';
    // $mail->AltBody = '';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>