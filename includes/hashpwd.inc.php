<?php

$pwdSignup = "Jacob";

$options = [
    'cost' => 12
];

$hashedPwd = password_hash($pwdSignup, PASSWORD_BCRYPT, $options);

$pwdLogin = "Jacob";

if (password_verify($pwdSignup, $hashedPwd)) {
    echo "Success";
} else {
    echo "Failed";
}