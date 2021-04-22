<?php
class Celular{
    var $marca;
    var $cor;
    var $ligado;
    var $bateria;

    function ligacao() {
        if ($this-> ligado == true) {
            echo "<p>Vou realizar uma ligação.</p>";
        } else {
            echo "<p>Infelimente, o celular esta desligado<p>";
        } 
    }

    function ligar() {
        $this-> ligado = true;
    }

    function desligar() {
        $this-> ligado = false;
    }
}



?>