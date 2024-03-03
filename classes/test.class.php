<?php

class Test extends Dbh {

    public function getUsers () {
        $sql = 'SELECT * FROM users';
        $stmt = $this->connect()->query($sql);
        while($row = $stmt->fetch()) {
            echo $row['username'] . '<br>';
        }
    }

}