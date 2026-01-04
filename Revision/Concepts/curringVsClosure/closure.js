// closure -> isko hum jb use krte hai jb apne ko apne outerScope
//  ke varible ko yaad rakhna hota hai even after outer fn finish ho jaye

// closure - memory+focus

function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}


const c1 = counter();
c1(); // 1
c1(); // 2
c1() // 3