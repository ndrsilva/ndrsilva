<?php
class Lapiseira{
    var $cor;
    var $ponta;
    var $grafite;

    function escrever() {
        if ($this -> grafite == true) {
            echo "<p>Irei escrever um texto.</>";
        } else {
            echo "<p>Lapiseira sem grafite.</p>";
        }
    }

    function grafiteOn(){
        $this-> grafite = true;
    }

    function grafiteOff(){
        $this-> grafite = false;
    }

}




?>