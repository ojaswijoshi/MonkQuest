
<?php
include 'db.php';

$name = $_POST['name'];
$gender = $_POST['gender'];

$sql = "INSERT INTO `user` (`name`, `gender`) VALUES ('$name', '$gender')";

$conn->query($sql);

echo "User added successfully!";
?>

