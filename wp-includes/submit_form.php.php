<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $state = $_POST["state"];
    $city = $_POST["city"];
    
    // Compose email message
    $to = "eddymc346@gmail.com";
    $subject = "New Enquiry from $name";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Mobile: $mobile\n";
    $message .= "State: $state\n";
    $message .= "City: $city\n";
    
    // Send email
    mail($to, $subject, $message);
    
    // Response to client
    echo "success";
} else {
    // Redirect back if accessed directly
    header("Location: index.html");
    exit();
}
?>
