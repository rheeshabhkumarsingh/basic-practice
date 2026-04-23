type Callback<T> = (element: T, index?: number, array?: T[]) => any

class MyArray<T>{
    array: T[];
    constructor(array: T[]) {
        this.array = array;
    }

    myForEach(callback: Callback<T>): void {
        for(let i=0;i<this.array.length;i++) {
            callback(this.array[i], i, this.array);
        }
    }

    myMap(callback: Callback<T>) : Array<T> {
        let newArray: T[] = [];
        for(let i = 0; i< this.array.length; i++) {
            newArray.push(callback(this.array[i], i, this.array) as T)
        }
        return newArray;
    }

    myFilter(callback: Callback<T>) {
        let result: T[] = [];
        for(let i = 0; i < this.array.length; i++) {
            if(callback(this.array[i], i, this.array)) {
                result.push(this.array[i]);
            }
        }
        return result;
    }
}

const arr = new MyArray([1, 2, 3]);
arr.myForEach((element: any)=> {
    console.log(element*2);
})

let newArr = arr.myMap((element) => {
    return element*2;
})
console.log(newArr)

let val = arr.myFilter(element => {
    return element%2 === 0;
})
console.log(val)

