// Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.
console.log('Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.');

function Num(){
    let number = 0;
    for (let i=1; i<=100; i++){
        if (i % 3 !==0) {
            number += i;
        }
        console.log(number);
    }
}
Num();