/*
Problem:
Move all 0s to the end while maintaining order of non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

function moveZero<T>(arr: T[]): T[] {
    let i = 0;
    let j = arr.length - 1;
    while(i<j) {
        if(arr[i] === 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j--;
        }
        else {
            i++;
        }
    }
    console.log(arr)
    return arr;
}

moveZero([0,1,0,3,12])
