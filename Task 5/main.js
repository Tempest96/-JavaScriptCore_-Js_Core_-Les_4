
    /* Task 5 */
    let a = +prompt('Enter A'),
    b = +prompt('Enter B'),
    c = +prompt('Enter C');
    let d = b * b - 4 * a * c;
    let x1,x2;
     if (d == 0){
         x1 = -b/(2*a);
        alert(`Має один корінь: x = ` + x1);
     }
     else if (a == 0){
         alert('A не може дорівнювати 0');
     }
     else if (d < 0){
         alert(`Немає коренів`);
     }
     else{
        x1=(-b + Math.sqrt(d))/(2 * a);
        x2=(-b - Math.sqrt(d))/(2 * a);
        alert('Має два корені: x1 = ' + x1 + ', x2 = ' + x2);
     }

 