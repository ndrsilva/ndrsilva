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
        require_once 'Lapiseira.php';
        $l1 = new Lapiseira;
        $l1->cor = "verde";
        $l1->ponta = "0.5";

        $l1-> grafiteOff();
        $l1-> escrever();
        print_r($l1);
    
    ?>
    
</body>
</html>