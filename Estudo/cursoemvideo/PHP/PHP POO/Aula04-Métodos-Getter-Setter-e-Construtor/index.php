<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caneta</title>
</head>
<body>
    <pre>
        <?php
            require_once 'Caneta.php';

            $c1 = new Caneta("Vermelha", 0.7);

            print_r($c1);
            echo "Eu tenho uma Caneta {$c1->getCor()} de ponta {$c1->getPonta()}";
        
        ?>
    </pre>
    
</body>
</html>