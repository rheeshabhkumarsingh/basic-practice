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
/*
moveZero output is not matching expected output:
[ 12, 1, 3, 0, 0 ] which is not expected
*/



function moveAtEnd(arr: any[]) {
    // let prev = arr[0];
    for(let i = 0; i<arr.length; i++) {
        if(arr[i]===0){
            const removed = arr.splice(i,1);
            arr = [...arr, ...removed]
        }
    }
    console.log(arr);
}

//above approach is also wrong:
/*
splice() is O(n) → inside loop = O(n²)
Reassigning arr doesn’t affect original array outside function
Also can skip elements after removal (index shifting bug)
*/

moveZero([0,1,0,3,12])
moveAtEnd([0,1,0,3,12])

// correct approach
function moveZeroes(arr: number[]): number[] {
    let insertPos = 0;

    // Move non-zero elements forward
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }

    // Fill remaining with zeros
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }

    return arr;
}

//Alternative (Swap-based, still stable)

function moveZeroesCorrect(arr: number[]): number[] {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    return arr;
}
