<?php 

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];

    try {
        
        require_once 'dbh.inc.php';
        require_once 'signup_model.inc.php';
        require_once 'signup_contr.inc.php';

        // ERROR HANDLERS

        $errors = [];

        if (is_input_empty($username, $pwd, $email)) {
            $errors["empty_input"] = "Fill in all fields.";
        }
        if (is_email_invalid($email)) {
            $errors["invalid_email"] = "Invalid email used.";
        }
        if (is_username_taken($pdo, $username)) {
            $errors["username_taken"] = "Username already taken.";
        }
        if (is_email_taken($pdo, $email))  {
            $errors["email_used"] = "Email already used.";
        }

        require_once 'config.inc.php';

        if ($errors) {
            $_SESSION["errors_signup"] = $errors;

            $signupData = [
                "username" => $username,
                "email" => $email
            ];
            $_SESSION["signupData"] = $signupData;

            header("Location: ../register.php");
            die();
        }

        create_user($pdo, $pwd, $username, $email);

        header("Location: ../register.php?signup=success");

        $pdo = null;
        $stmt = null;        
        
        die();
    } catch (PDOException $e) {
        die("Query Failed: " . $e->getMessage());
    }

} else {
    header("Location: ../register.php");
    die();
}