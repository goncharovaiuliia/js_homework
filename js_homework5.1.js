// first method
console.log('first method');
function Yalinka(h,s){
    for (let i=1; i<=h; i++){
        console.log(s.repeat(i));
    }
}

Yalinka(2,'+');


console.log('second method');
// second method
function Yalinka2(h,s) {
    let y = 1;
    do {
        console.log(s.repeat(y));
        y++;
    } while (y <= h);
}
Yalinka2(3,'+');
