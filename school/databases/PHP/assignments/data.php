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
			
			$query = sprintf("SELECT id, socialcredit FROM socialcredit ORDER BY id");
			
			$result = $mysqli->query($query);
			
			$data = array();
			foreach ($result as $row) {
				$data[] = $row;
			}
			
			$result->close();
			
			$mysqli->close();	
			
			print json_encode($data);
		?>
	</body>
</html>		