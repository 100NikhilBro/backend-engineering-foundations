const User = {
    name: 'Nikhil',
    show: () => { // yehan pr arrow fn laga hai mtlb lexical scope mtlb undefined
        console.log(this.name);
    }
}



// Correct Way of Using 'this' keyword with Arrow fn


const U_User = {
    name: 'Nikhil',
    show() { // ab arrow fn -> inherit kr lega this show se
        arrow: () => {
            console.log(this.name);
        }
        arrow();
    }
}