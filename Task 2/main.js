    /* Task 2 */

    let sum = 0;
    let employeeSalaries = {
        s1 : 400,
        s2 : 300,
        s3 : 500,
        s4 : 1000
    }
        for(let key in employeeSalaries){
            sum += employeeSalaries[key]
    }
    console.log('Загальна заробітня плата усіх парцівників = ' + sum)