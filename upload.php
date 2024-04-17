<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection parameters
    $servername = "localhost";
    $username = "root"; // Change this to your MySQL username
    $password = ""; // Change this to your MySQL password
    $dbname = "savoir"; // Change this to your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name'];
    $sec = $_POST['sel'];
    $file_content = file_get_contents($_FILES["file"]["tmp_name"]); // Get file content
    $currentDate = date("Y-m-d");

    // Insert data into database

    $sql = "INSERT INTO document (nomdoc, type, date, file_content) VALUES ('$name', '$sec', '$currentDate', '$file_content')";    

    if ($conn->query($sql) === TRUE) {
        echo "File uploaded successfully and data inserted into database.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close connection
    $conn->close();
}