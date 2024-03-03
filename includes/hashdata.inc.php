<?php 

$sensitiveData = "Jacob";
$salt = bin2hex(random_bytes(16)); // generate random salt
$pepper = "LickMyBalls";

$dataToHash = $sensitiveData . $salt. $pepper;
$hash = hash("sha256", $dataToHash);

//verifcation

$sensitiveData = "Jacob2";

$storedSalt = $salt;
$storedHash = $hash;
$pepper = "LickMyBalls";

$dataToHash = $sensitiveData . $salt. $pepper;
$verificationHash = hash("sha256", $dataToHash);

if ($storedHash === $verificationHash) {
    echo "Success";
} else {
    echo "Failed";
}
