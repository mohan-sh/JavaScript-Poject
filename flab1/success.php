<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Success Page</title>
<style>
body {
font-family: Arial, sans-serif;
background-color: #f0f0f0;
margin: 0;
padding: 0;
}
.container {
max-width: 600px;
margin: 50px auto;
padding: 20px;
background-color: #fff;
border-radius: 8px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
h1 {
text-align: center;
color: #333;
}
p {
text-align: center;
color: #666;
}
.info {
margin-top: 20px;
padding: 10px;
background-color: #f9f9f9;
border-radius: 5px;
border: 1px solid #ddd;
}
.info label {
font-weight: bold;
}
.info p {
margin: 5px 0;
}
</style>
</head>
<body>
<?php
$id = $_POST['id'];
$uname = $_POST['uname'];
$branch = $_POST['branch'];
?>
<div class="container">
<h1>Success!</h1>
<p>Your form has been submitted successfully.</p>
<div class="info">
<p><label>ID:</label> <?php echo "$id"; ?></p>
<p><label>Username:</label> <?php echo "$uname"; ?></p>
<p><label>Branch:</label> <?php echo "$branch"; ?></p>
</div>
</div>
</body>
</html>
