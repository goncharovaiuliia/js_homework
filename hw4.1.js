let num = 8;
num = prompt('Add value');
//Зробити перевірку що користувачь ввів число та це число не є відємним
if (num>0 || !isNaN(num)) {
    if (num === 1) {
        console.log('Value ' + num + ' рік')
    } else if (num === 2 || num === 3 || num === 6) {
        console.log('Value ' + num + ' роки')
    } else {
        console.log('Value ' + num + ' років')
    }
}
else
    console.log ('Value is not number')
