class User {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}

const u = new User('Nikhil');
u.show();



// this ko class mein callBack ke saath hum aise use nhi krte
class Test {
    constructor(name) {
        this.name = name;
    }

    showName() {
        setTimeout(function() {
            console.log(this.name);
        }, 2000);
    }
}


// Correct Way of Using With Class - Callback

class T_test {
    constructor(t) {
        this.t = t;
    }

    showT() {
        setTimeout(() => {
            console.log(this.t);
        }, 2000)
    }
}