"use strict";
class MyArray {
    array;
    constructor(array) {
        this.array = array;
    }
    myForEach(callback) {
        for (let i = 0; i < this.array.length; i++) {
            callback(this.array[i], i, this.array);
        }
    }
    myMap(callback) {
        let newArray = [];
        for (let i = 0; i < this.array.length; i++) {
            newArray.push(callback(this.array[i], i, this.array));
        }
        return newArray;
    }
    myFilter(callback) {
        let result = [];
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i], i, this.array)) {
                result.push(this.array[i]);
            }
        }
        return result;
    }
}
const arr = new MyArray([1, 2, 3]);
arr.myForEach((element) => {
    console.log(element * 2);
});
let newArr = arr.myMap((element) => {
    return element * 2;
});
console.log(newArr);
let val = arr.myFilter(element => {
    return element % 2 === 0;
});
console.log(val);
