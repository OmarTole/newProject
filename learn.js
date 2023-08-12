'use strict'

class MyNewClass {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new MyNewClass(10, 10);

console.log(square.calcArea());