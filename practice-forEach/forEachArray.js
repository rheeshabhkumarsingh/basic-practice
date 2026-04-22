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
}
const arr = new MyArray([1, 2, 3]);
arr.myForEach((element) => {
    console.log(element * 2);
});
