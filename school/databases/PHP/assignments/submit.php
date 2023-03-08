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
				$fields = ['fname', 'lname', 'email', 'password', 'housenum', 'postcode', 'addr1', 'addr2'];
				$values = array();
				
				foreach($fields as $field) {
					if(!empty($_POST[$field])) {
						$values[$field] = validate_input($field);
					}
					else {
						echo "Didn't find symbol $field" ;
						exit();
					}
				} 
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
			else
			$sql = "INSERT INTO details (fname, lname, email, password, housenum, postcode, addr1, addr2) 
			VALUES('$fname','$lname','$email','$password','$housenum','$postcode','$addr1','$addr2')";
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