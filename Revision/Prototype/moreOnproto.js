const obj1 = {
    name: "Nikhil",
    getName() {
        console.log(this.name);
    }
}

const obj2 = {
    age: 22,
    name: "Raju",
    getAge() {
        console.log(this.age);
    },
    __proto__: obj1
}

const obj3 = {
    rollNumber: 1234567,
    getRollNumber() {
        console.log(this.rollNumber);
    },
    __proto__: obj2
}

obj3.getName();