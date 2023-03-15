<!doctype html>
<html lang="en">
	<head>
	</head>
	<body>
		<?php
			function validate_input($data) {
				$data = trim($data);
				$data = stripslashes($data);
				$data = htmlspecialchars($data);
				return $data;
			}
			
			if (isset($_POST['submit'])) {
				if(!empty($_POST['fname'])) {
					$fname = validate_input($_POST['fname']);}
					echo $fname;
				if(!empty($_POST['lname'])) {
					$lname = validate_input($_POST['lname']);}
				if(!empty($_POST['email'])) {
					$email = validate_input($_POST['email']);}
				if(!empty($_POST['password'])) {
					$password = validate_input($_POST['password']);}
				if(!empty($_POST['confirmpassword'])) {
					$confirmpassword = validate_input($_POST['confirmpassword']);}
				if(!empty($_POST['housenum'])) {
					$housenum = validate_input($_POST['housenum']);}
				if(!empty($_POST['postcode'])) {
					$postcode = validate_input($_POST['postcode']);}
				if(!empty($_POST['addr1'])) {
					$addr1 = validate_input($_POST['addr1']);}
				if(!empty($_POST['addr2'])) {
					$addr2 = validate_input($_POST['addr2']);}
			}
			
			
			
			$servername = "10.140.42.235";
			$username = "AS";
			$password = "password";
			$database="AS_database";
			$port = "3307";
			$conn = mysqli_connect($servername,$username,$password,$database,$port);
			
			if (mysqli_connect_errno()) {
				echo "Failed to connect to MySQL: " . mysqli_connect_error();exit();
			}
			else {
			$sql = "INSERT INTO details (fname, lname, email, password, confirmpassword, housenum, postcode, addr1, addr2) 
			VALUES('$fname','$lname','$email','$password','$confirmpassword','$housenum','$postcode','$addr1','$addr2')";
			if(mysqli_query($conn, $sql)){
				echo "Data added successfully :)";
				}else{
				echo "Unable to add data at this time :|". mysqli_errno($conn);
			}
		}
		mysqli_close($conn);
	?>
</body>
</html>			