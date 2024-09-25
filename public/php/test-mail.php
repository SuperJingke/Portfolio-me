<?php
$to = "jingkeliang88@gmail.com"; // Change this to your email
$subject = "Test Email from PHP";
$message = "This is a test email sent using the PHP mail() function.";
$headers = "From: your-email@example.com"; // Change this to your email

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Email sending failed.";
}
?>
