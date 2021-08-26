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
        echo "Adição ", $n3 = $n1+$n2, " = ", $n1 +=$n2;
    
    
    ?>
    
</body>
</html>