<?php
$db = parse_ini_file("database.ini");

$servername = $db['host'];
$username = $db['user'];
$password = $db['pass'];
$dbname = $db['name'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT nric_passport FROM contest"); 
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_OBJ); 

    $result = $stmt->fetchAll();
    $nrics = array();

    foreach ($result as $key => $value) {
      $nrics[] = $value->nric_passport;
    }

    echo json_encode($nrics);
    
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;
?>