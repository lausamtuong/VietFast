<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phần 1 Bài 3</title>
</head>
<body>
    <?php
        echo "a. For loop: <br>";
        for ($i = 0; $i <= 100; $i++) {
            if ($i % 2 == 1) echo "$i ";
        }
        echo "<br> b. While loop: <br>";
        $j = 0;
        while ($j <= 100) {
            if ($j % 2 == 1) echo "$j ";
            $j++;
        }
    ?>
</body>
</html>