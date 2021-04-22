<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funcoes Aritmeticas</title>
</head>
<body>
    <?php
        $x = $_GET["x"];
        $y = $_GET["y"];

        echo "<h1>Valores recebidos: $x e $y</h1>";

        echo "<h2>O valor absoluto de $y é ". abs($y). "</h2>";
        echo "<h2>$x <sup>$y</sup> é igual a ". pow($x, $y). "</h2>";
        echo "<h2>A raiz quadrada de $x é ". sqrt($x). "</h2>";
        echo "<h2>O arredondamento de $y é ". round($y). "</h2>";
        echo "<h2>O valor inteiro de $y é ". intval($y). "</h2>";
        echo "<h2>O valor de $x em moeda ". number_format($x, 2, ",","."). "</h2>";
       
    ?>
</body>
</html>