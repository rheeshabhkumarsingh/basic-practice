"use strict";
function duplicate(arr) {
    let countObj = {};
    for (let i = 0; i < arr.length; i++) {
        countObj[arr[i]] = countObj[arr[i]] + 1 || 1;
        if (countObj[arr[i]] > 1) {
            return true;
        }
    }
    return false;
}
console.log(duplicate([1, 2, 3, 4, 5, 6, 7]));
console.log(duplicate([1, 2, 3, 4, 5, 6, 7, 1]));
