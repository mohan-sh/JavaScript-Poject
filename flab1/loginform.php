<?php
// Retrieve form data
$id = $_POST['id'];
$uname = $_POST['uname'];
$branch = $_POST['branch'];
$pass = $_POST['pass'];

// Redirect to success page with form data as URL parameters
header("Location: success.php?id=$id&uname=$uname&branch=$branch&pass=$pass");
exit;
?>
