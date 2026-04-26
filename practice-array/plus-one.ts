function plusOne(arr:number[]):number[] {
    // console.log(arr.join(''))
    let num = Number(arr.join(''))
    num = num + 1;
    // console.log(num)
    return String(num).split('').map(Number);
}

console.log(plusOne([1,2,3,4]))
console.log(plusOne([1,2,9]))

console.log(plusOne([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]))

//above solution will work for small numbers but will break for big numbers