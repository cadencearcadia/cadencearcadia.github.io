<?php

declare(strict_types=1);

function signup_inputs() {

    if (isset($_SESSION["signupData"]["username"]) && !isset($_SESSION["errors_signup"]["username_taken"])) {
        echo '<input type="text" name="username" placeholder="Username" value="' . $_SESSION["signupData"]["username"] . '">';
     } else {
            echo '<input type="text" name="username" placeholder="Username">';
        }
        
        echo '<input type="password" name="pwd" placeholder="Password">';

        if (isset($_SESSION["signupData"]["email"]) && !isset($_SESSION["errors_signup"]["email_used"]) && !isset($_SESSION["errors_signup"]["invalid_email"])) {
            echo '<input type="text" name="email" placeholder="Email" value="' . $_SESSION["signupData"]["email"] . '">';
         } else {
                echo '<input type="text" name="email" placeholder="Email">';
            }

    }


function check_signup_errors () {
    if (isset($_SESSION["errors_signup"])){
        $errors = $_SESSION["errors_signup"];

        echo "<br>";
        echo '<div class="error-message">';

        foreach($errors as $error) {
            echo $error . "<br>";
        }
        echo "</div>";
        
        unset($_SESSION["errors_signup"]);
    } elseif (isset($_GET["signup"]) && $_GET["signup"]) {
        echo "<br>";
        echo '<div class="success-message">';
        echo "Signup Success!";
        echo "</div>";
    }
}