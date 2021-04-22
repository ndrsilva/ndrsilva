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
        require_once 'Caneta.php';

        $c1 = new Caneta();
        //$c1->setModelo("BIG");
        $c1->modelo = "NIC";
        //$c1->setPonta(0.5);
        //Ao declará a "ponta" diretamente, irá dá erro por ela ser PRIVATE, e o acesso tem que ser por função
        $c1->ponta = 0.3;
        print_r($c1);
    ?>
    
    
</body>
</html> 