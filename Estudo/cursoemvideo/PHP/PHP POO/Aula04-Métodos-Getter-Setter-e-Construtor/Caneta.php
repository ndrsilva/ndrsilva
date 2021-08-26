<?php

class Caneta {
    public  $modelo;
    private $cor;
    private $ponta;
    private $tampa;
/*
    public function __construct() {
        $this->cor = "Azul";
        $this->setPonta(0.7);
    }
*/
    public function __construct($c, $p) {
        $this->setCor($c);
        $this->setPonta($p);
    }

    public function tampar() {
        $this->tampada = true;
    }

    public function getCor() {
        return $this->cor;
    }

    public function setCor($c) {
        $this->cor = $c;
    }
        
    public function getModelo() {
        return $this->modelo;
    }

    public function setModelo($m) {
        $this->modelo = $m;
    }

    public function getPonta() {
        return $this->ponta;
    }

    public function setPonta($p) {
        $this->ponta = $p;
    }

}



?>