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
        $preco = $_GET["p"];
        echo "O preço do produto é R$ ". number_format($preco, 2);
        //$porcent = $preco * 0.1;
        //$novPreco = $preco + $porcent;
        //ou
        //$novPreco = $preco + ($preco * 0.1);
        //ou
        $preco += $preco *0.1;

        echo "<br/>O novo preço com 10% de aumento será de ". number_format($preco, 2);
        

    
    ?>
    
</body>
</html>