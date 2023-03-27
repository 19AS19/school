<!DOCTYPE html>
<html>
	<body>
		<?php
			$servername = "10.140.42.235";
			$username = "AS";
			$password = "password";
			$database = "AS_database";
			$port = "3307";
			$conn = mysqli_connect($servername, $username, $password, $database, $port);
			
			if (mysqli_connect_errno()) {
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
				exit();
				} else {
				echo "Connection Successful";
			}
			$sql = "CREATE DATABASE IF NOT EXISTS AS_database";
			
			if (mysqli_query($conn, $sql)) {
				echo "Database created successfully";
				} else {
				echo "Error creating database:" . mysqli_error($conn);
			}
			mysqli_select_db($conn, "AS_database");
			$result = mysqli_query($conn, "SELECT DATABASE()");
			$row = mysqli_fetch_row($result);
			printF("Connected to database is %s.<br>", $row[0]);
			
			$sql = "CREATE TABLE details (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            fname VARCHAR(30) NOT NULL,
            lname VARCHAR(30) NOT NULL,
            email VARCHAR(50),
			password VARCHAR(30),
			confirmpassword VARCHAR(30),
            housenum VARCHAR(30),
            postcode VARCHAR(50),
            addr1 VARCHAR(30),
            addr2 VARCHAR(30),	
			socialcredit VARCHAR(5)
			)";
			
			if (mysqli_query($conn, $sql)) {
			echo "Table created successfully";
			} else {
			echo "Error creating table:" . mysqli_error($conn);
			} 
		?>
	</body>
</html>		