<!DOCTYPE html>
<html>
    <body>
        <?php
        /* To create an empty array. Either of the following are equivalent */
        $numbers1 = array();
        $numbers2 = [];
        //To create an array with predefined values
        $numbers3 = array( 1, 2, 3, 4, 5);
        $numbers4 = [1, 2, 3, 4, 5];
        echo "Printing array 3 <br>";
        foreach( $numbers3 as $value) {
            echo "Value is $value <br />";
        }
        echo "printing array 4 <br>";
        foreach( $numbers4 as $value ) {
            echo "Value is $value <br />";
        }
        
        #To add values to an array
        $numbers1[0] = "one";
        $numbers1[1] = "two";
        #If you don't provide an index PHP will do it
        $numbers2[] = "three";
        $numbers2[] = "four";

        echo "printing array 1<br>";
        foreach( $numbers1 as $value) {
            echo "Value is $value <br />";
        }
        echo "printing array 2 <br>";
        foreach( $numbers2 as $value) {
            echo "Value is $value <br />";
        }
        ?>
    </body>
</html>