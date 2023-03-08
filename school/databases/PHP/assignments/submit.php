<!DOCTYPE html>
<html lang="en">
    <head></head>
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
 
        $host = "localhost";
        $username = "AS";
        $password = "password";
        $database = "";
        $port = "3307";

        // CHECK CONNECTION
        $conn = mysqli_connect($host, $username, $password, $database, $port);
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " .mysqli_connect_error();
            exit();
        }
        else {
            echo "connected";
        }

        $sql = "CREATE DATABASE IF NOT EXISTS as_database";
            if (mysqli_query($conn, $sql)) {
                echo "Database created successfully";}

            else{echo "Error creating database:" . mysqli_error($conn);}

        
        $sql = "
            CREATE TABLE IF NOT EXISTS details (
                id INT AUTO-INCREMENT PRIMARY KEY,
                fname CHAR(50),
                lname CHAR(50),
                email CHAR(50),
                password CHAR(50),
                housenum CHAR(50),
                postcode CHAR(50),
                addr1 VARCHAR(255),
                addr2 VARCHAR(255)
            )
            INSERT INTO details(fname, lname, email, password, housenum, postcode, addr1, addr2) VALUES (".$values['fname'].",".$values['lname'].",".$values['email'].",".$values['password'].",".$values['housenum'].",".$values['postcode'].",".$values['addr1'].",".$values['addr2'].")
        "
        ?>
    </body>