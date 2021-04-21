<?php
class ContaBanco {
    public $numConta;
    protected $tipo;
    private $dono;
    private $saldo;
    private $status;

    public function abrirConta($t) { 
        $this-> setTipo($t);
        $this-> setStatus(true);

        if ($t == "CC") {
            $this-> setSaldo(50);
        }else{
            $this-> setSaldo(150);
        }
    }

    public function fecharConta() {
        if($this-> getSaldo() > 0){
            echo "<p>Conta com dinheiro.</p>";
        }else if ($this-> getSaldo() < 0){
            echo "<p>Conta com Saldo negativo</p>";
        }else{
            $this-> setStatus(false);
            echo "<p>Conta fechada com sucesso</p>";
        }
    }

    public function depositar($v) {
        if($this-> getStatus()) {
            $this-> setSaldo($this-> getSaldo() + $v);
            echo "</p>Depósito de R$ $v na conta de ".$this->getDono()."</p>";
        }else{
            echo "Impossível depositar";
        }
    }

    public function sacar($v) {
        if($this-> getStatus()) {
            if($this-> getSaldo() >= $v){
                $this-> setSaldo($this-> getSaldo() - $v);
                echo "<p>Saque autorizado de R$ $v na conta da ". $this-> getDono()."</p>";
            }else{
                echo "Saldo insuficiente para saque.";
            }
    }else{
        echo "Conta fechada";
    }
    }
 
    public function pagarMensal() {

        if($this-> getTipo() == "CC") {
            $v = 12;
        }else if ($this-> getTipo() == "CP") {
            $v = 20;
        }

        if($this-> getStatus()){
            if($this-> getSaldo() >= $v){
                $this-> setSaldo($this-> getSaldo() - $v);
                echo "<p>Mensalidade de R$ $v debitada na conta de ". $this->getDono() . "</p>";
            }else{
                echo "Saldo insuficiente";
            }
            
        }

    }
    ////Métodos Especiais
    function __construct() {
        $this-> saldo = 0;
        $this-> setStatus(false);
        echo "<p>Conta criada com sucesso!</p>";
    }

    function setNumConta($n) {
        $this-> numConta = $n;
    }
   function getNumConta() {
        return $this->numConta;
    }

    function setTipo($t) {
        $this-> tipo = $t;
    }
    function getTipo() {
        return $this->tipo;
    }

    function setDono($n) {
        $this-> dono = $n;
    }
    function getDono() {
        return $this->dono;
    }

    function setSaldo($s) {
        $this-> saldo = $s;
    }
    function getSaldo() {
        return $this->saldo;
    }

    function setStatus($st) {
        $this-> status = $st;
    }
    function getStatus() {
        return $this->status;
    }

}

?>