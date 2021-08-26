<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <link rel="stylesheet" href="_css/estilo.css" /> 
        <meta charset="UTF-8" />
        <title>Operadores Aritmeticos</title>
    </head>
    <body>
        <h1>Operadores Aritméticos</h1>
        <?php
            if (isset($_GET["a"]) && isset($_GET["b"])) {

                $n1 = $_GET["a"];
                $n2 = $_GET["b"];
            } else {
                $n1 = 10;
                $n2 = 5;
            }

            echo "<h2>Exemplos com $n1 & $n2</h2>";
            echo "-----------------------------------------";
            echo "<h2> A soma vale ". ($n1+$n2)."</h2>";
            echo "<h2> A subtração vale ". ($n1-$n2)."</h2>";
            echo "<h2> A multiplicação vale ".($n1*$n2)."</h2>";
            echo "<h2> A divisão vale ".($n1/$n2)."</h2>";
            echo "<h2> O modulo vale ".($n1%$n2)."</h2>";
            echo "******************************************";

            if (isset($_GET["x"]) && isset($_GET["y"])){

                $v1 = $_GET["x"];
                $v2 = $_GET["y"];
            } else {
                $v1 = 2000;
                $v2 = 3.5;
            }

            echo "<h2> Exemplo com $v1 & $v2 </h2>";
            echo "-------------------------------------------";
            echo "<h2> O valor absoluto de $v2 é " .abs($v2). "<h2>";
            echo "<h2> O valor de $v1<sup>$v2</sup> é " .pow($v1, $v2). "</h2>";
            echo "<h2> A raiz de $v1 é " .sqrt($v1). "</h2>";
            echo "<h2> O valor de $v2 arredondado é " .round($v2). "</h2>"; // ceil / floor
            echo "<h2> A parte inteira de $v2 é ". intval($v2). "</h2>";
            echo "<h2> O valor de $v1 em moeda é ". number_format($v1, 2, ",", "."). "</h2>";

        ?>
    </body>
</html>