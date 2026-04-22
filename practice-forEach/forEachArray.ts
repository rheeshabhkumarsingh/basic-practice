class MyArray<T>{
    array;
    constructor(array: T[]) {
        this.array = array;
    }

    myForEach(callback: any): void {
        for(let i=0;i<this.array.length;i++) {
            callback(this.array[i], i, this.array);
        }
    }
}

const arr = new MyArray([1, 2, 3]);
arr.myForEach((element: any)=> {
    console.log(element*2);
})