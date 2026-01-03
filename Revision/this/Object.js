const User = {
    name: 'Nikhil',
    show() {
        console.log(this.name); // Nikhil - print ho jayega
    }
}

User.show();

const fn = User.show(); // yeh ho jayega undefined - kyu ki call-Side change ho gya