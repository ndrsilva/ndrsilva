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
        require_once 'Celular.php';

        $c1 = new Celular;
        $c1->marca = "Moto";
        $c1->cor    = "Preto";
        $c1->bateria = 58;

        $c1->desligar();
        $c1-> ligacao();
        print_r($c1);
    
    
    ?>
</body>
</html>