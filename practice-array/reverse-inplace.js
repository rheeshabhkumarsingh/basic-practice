"use strict";
/*
Reverse Array

Problem:
Reverse the given array in-place.
*/
//wrong solution
// export function reverse<T>(arr: Array<T>): Array<T> {
//     if(!arr) {
//         return arr;
//     }
//     for(let i=0;i<arr.length;i++) {
//         const temp = arr.shift() as T;
//         arr.push(temp);
//     }
//     return arr;
// }
let array = [1, 2, 3, 4];
// function swap<T>(i: number, j: number, arr: T[]) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
let i = 0;
let j = array.length - 1;
while (j > i) {
    // swap(i, j, array);
    [array[i], array[j]] = [array[j], array[i]];
    i++;
    j--;
}
console.log(array);
