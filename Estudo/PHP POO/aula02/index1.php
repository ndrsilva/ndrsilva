<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        require_once 'Caneta.php';//Add a class Caneta.
        $c1 = new Caneta;// Criando um objeto $c1 do tipo Caneta.
        $c1->cor = "Azul";
        $c1->ponta = 0.5;
        $c1->tampada = false;//Com a função tampar() e destampar(), não é preciso declarar essa parte.
        $c1->destampar();
        $c1-> rabiscar();
        print_r($c1);

        echo "</br>"; 

        $c2 = new Caneta;
        $c2->cor = "Verde";
        $c2->carga = 50;
        $c2->tampar(); 
        print_r($c2);

        //var_dump($c1);// Ver o estado atual de $c1
        //print_r($c1);// Ver o estado atual de $c1
        
    
    
    ?>
</body>
</html>