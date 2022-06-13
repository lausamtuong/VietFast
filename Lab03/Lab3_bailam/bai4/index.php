<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phần 1 Bài 4</title>
    <style>
        table, td {
            border: 1px solid;
        }
        table {
            border-collapse: collapse;
        }
        td {
            width: 20px;
            background-color: yellow;
            text-align: center;
        }
        
    </style>
</head>
<body>
    <table>
        <?php
            for ($i = 1; $i <= 7; $i++) {
                echo "<tr>";
                for ($j = 1; $j <= 7; $j++) {
                    echo "<td>", $i * $j, "</td>";
                }
                echo "</tr>";
            }
        ?>
    </table>
</body>
</html>