<html>

    <head>
        <title>Hello World</title>
    </head>

<body>
    <?php
        $variable = "name";
        $literally = 'My $variable will not print!';

        echo($literally);
        echo("<br>");

        $literally = "My $variable will print!";
        echo($literally);

    ?>
</body>

</html>