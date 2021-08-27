<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if (isset($_GET["a"]) && isset($_GET["b"])) {

            $n1 = $_GET["a"];
            $n2 = $_GET["b"];
        } else {
            $n1 = 2;
            $n2 = 4;
        }
        /////////////*Forma tradicional*//*Operadores de Atribução*/
        echo "<h2> $n1 & $n2</h2>";
        echo "<p> Adição ", $n1 = $n1+$n2, "</p> ";// $n1 += $n2
        echo "<p >Subtração ", $n1 = $n1-$n2, "<p/>";// $n1 -= $n2
        echo "<p> Multiplicação ", $n1 = $n1 * $n2, "</p>"; // $n1 *= $n2
        echo "<p> Divisão ", $n1 = $n1 / $n2, "</p>"; // $n1 /= $n2
        echo "<p> Módulo ", $n1 = $n1 % $n2, "</p>"; // $n1 %=$n2
        echo "<p> Concatenação ", $n1 = $n1 . $n2, "</p>"; // $n1 .= $n2

        /*
        Pré-incremento $a = $a + 1 ou ++$a

        Pós-incremento $a = $a + 1 ou $a++

        Pré-decremento $a = $a - 1 ou --$a

        Pós-decremento $a = $a - 1 ou $a--
        */
    /////////////////////////////////////////////////////////////
    //Variáveis referencias
    echo "<h2>Variáveis referências... </h2>";
    $a = 3;
    $b = &$a;// Faz com que as variáveis trabalhe como um espelho, refletindo o valor da outra.
    $b += 5;
    
    
    echo "A = $a e B = $b";
    
    ?>
    
</body>
</html>