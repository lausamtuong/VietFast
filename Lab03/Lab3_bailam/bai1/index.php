<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phần 1 Bài 1</title>
</head>
<body>
    <div>
        <?php 
            $x = 10;
            $y = 7;
        ?>
        <ul>
            <li><?php echo "$x + $y = ", $x + $y;?></li>
            <li><?php echo "$x - $y = ", $x - $y;?></li>
            <li><?php echo "$x * $y = ", $x * $y;?></li>
            <li><?php echo "$x / $y = ", $x / $y;?></li>
            <li><?php echo "$x % $y = ", $x % $y;?></li>
        </ul>
    </div>
</body>
</html>