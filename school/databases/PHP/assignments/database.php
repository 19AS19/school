<!DOCTYPE html>
<html>

<body>
    <?php
    $servername = "10.140.42.235";
    $username = "AS";
    $password = "password";
    $database = "";
    $port = "3307";
    $conn = mysqli_connect($servername, $username, $password, $database, $port);

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    } else {
        echo "Connection Successful";
    }
    $sql = "CREATE DATABASE zh_Gorrila_db";

    if (mysqli_query($conn, $sql)) {
        echo "Database created successfully";
    } else {
        echo "Error creating database:" . mysqli_error($conn);
    }
    mysqli_select_db($conn, "zh_Gorrila_db");
    $result = mysqli_query($conn, "SELECT DATABASE()");
    $row = mysqli_fetch_row($result);
    printF("Connected to database is %s.<br>", $row[0]);


    $sql = "CREATE TABLE details (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            fname VARCHAR(30) NOT NULL,
            lname VARCHAR(30) NOT NULL,
            HouseNumber VARCHAR(50),
            AddressLine1 VARCHAR(30),
            AddressLine2 VARCHAR(30),
            City VARCHAR(50),
            County VARCHAR(30),
            Postcode VARCHAR(30),
            ContactNumber VARCHAR(50),
            reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
    if (mysqli_query($conn, $sql)) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table:" . mysqli_error($conn);
    } ?>
</body>

</html>