<?php

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// ENTER YOUR EMAIL
$emailTo = "jingkeliang88@gmail.com";

// ENTER IDENTIFIER
$emailIdentifier = "Message sent via contact form from " . $_SERVER["SERVER_NAME"];

if ($_POST) {
    $name = htmlspecialchars(trim($_POST["name"]));
    $clientEmail = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));
    $fhp_input = htmlspecialchars(trim($_POST["company"]));

    $array = array("nameMessage" => "", "emailMessage" => "", "messageMessage" => "", "succesMessage" => "");

    // Validate name
    if ($name == "") {
        $array["nameMessage"] = "x";
    }

    // Validate email
    if (!filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
        $array["emailMessage"] = "x";
    }

    // Validate message
    if ($message == "") {
        $array["messageMessage"] = "x";
    }

    // Check honeypot input for spam
    if ($fhp_input != "") {
        // Honeypot filled; exit the script without sending the email
        $array["succesMessage"] = "Spam detected.";
        echo json_encode($array);
        exit;
    }

    // If all validations pass
    if ($name != "" && filter_var($clientEmail, FILTER_VALIDATE_EMAIL) && $message != "") {
        $array["succesMessage"] = "Thank you for your submission!";

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: " . $name . " <" . $clientEmail . ">\r\n";
        $headers .= "Reply-To: " . $clientEmail;

        // Attempt to send the email
        if (mail($emailTo, $emailIdentifier, $message, $headers)) {
            // Email sent successfully
            $array["succesMessage"] = "Thank you for your submission!";
        } else {
            // Email failed to send
            $array["succesMessage"] = "There was an error sending your message. Please try again later.";
        }
    }

    // Set content type to application/json
    header('Content-Type: application/json');
    echo json_encode($array);
}

?>
