    /* Task 1 */

let user = {};
user = {
    name: 'Пилип',
    surname: 'Шевченко'
}

console.log(user)

let newUser = Object.assign({},user,{name:'Тарас'})

console.log(newUser)

function deleteProperty(property,obj){
    delete obj[property]
    console.log(obj)
}

deleteProperty('name',user)

