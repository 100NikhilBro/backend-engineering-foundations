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