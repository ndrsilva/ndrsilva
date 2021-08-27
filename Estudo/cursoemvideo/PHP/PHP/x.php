<?php
//$x = 100;
//echo "R$ ". number_format($x, 2);// Depois da virgula é a específicação de qt de casas decimas.

//Variáveis referencias
echo "<h2>Variáveis referências... </h2>";
$a = 3;
$b = &$a;// Faz com que as variáveis trabalhe como um espelho, refletindo o valor da outra.
$b += 5;
echo "A = $a e B = $b";
//////////////////////////////////////////////

?>