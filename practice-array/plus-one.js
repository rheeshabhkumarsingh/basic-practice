"use strict";
function plusOne(arr) {
    // console.log(arr.join(''))
    let num = Number(arr.join(''));
    num = num + 1;
    // console.log(num)
    return String(num).split('').map(Number);
}
console.log(plusOne([1, 2, 3, 4]));
console.log(plusOne([1, 2, 9]));
console.log(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));
