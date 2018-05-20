<?php
date_default_timezone_set('GMT');
// Set the uplaod directory
$uploadDir = "/singapore_pool/uploads/";

// Set the allowed file extensions
$fileTypes = array('jpg', 'jpeg'); // Allowed file extensions

// $verifyToken = md5('unique_salt' . $_POST['timestamp']);

if (!empty($_FILES)) {
  $random = substr(md5(mt_rand()), 0, 7);
  $currentDateTime = date('Y_m_d');
  $tempFile   = $_FILES['Filedata']['tmp_name'];
  $fileParts = pathinfo($_FILES['Filedata']['name']);

  $uploadDir  = $_SERVER['DOCUMENT_ROOT'] . $uploadDir;
  $targetFile = $uploadDir . $fileParts['filename'] . '_' . $random . '_' . $currentDateTime . '.' . $fileParts['extension'];

  // Validate the filetype  
  if (in_array(strtolower($fileParts['extension']), $fileTypes)) {

    // Save the file
    move_uploaded_file($tempFile, $targetFile);
    echo $targetFile;

  } else {

    // The file type wasn't allowed
    echo 'Invalid file type.';

  }
}
?>