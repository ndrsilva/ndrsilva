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
        //$n1 = 3;
        //$n2 = 2;
        $n1 = $_GET["a"];
        $n2 = $_GET["b"];
        $soma = $n1 + $n2;
        $media = ($n1 + $n2) / 2;

        echo "
            <h1>A soma de $n1 e $n2 é igual a $soma<h1>
            <h1>A média de $n1 e $n2 é $media</h1>

        ";
        //Adicão            $r = $a + $b;
        //Subtração         $r = $a - $b;
        //Multiplicação     $r = $a * $b;
        //Divisão           $r = $a / $b;
        //Módulo            $r = $a % $b;
        //
    
    
    ?>
</body>
</html>