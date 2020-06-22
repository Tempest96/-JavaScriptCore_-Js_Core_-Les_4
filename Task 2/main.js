
    
    /* Task 2 */

    var a = prompt('Enter first number');
    var b = prompt('Enter second number');
    var x = 10;
    if(Math.abs(a-x) < Math.abs(b-x)){
        alert(a + ' Ближче до ' + x)
    }
    else if(Math.abs(a-x) > Math.abs(b-x)){
        alert(b + ' Ближче до ' + x);
    }
    else alert ('Одинаково близькі до ' + x);

  