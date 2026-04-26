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

//above solution will work for small numbers but will break for big numbers like 100 digits
//chat gpt solution
function plusOneNew(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0; // carry over
    }

    // if all digits were 9
    digits.unshift(1);
    return digits;
}

