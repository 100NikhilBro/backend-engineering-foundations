// currying -> it is a technique jisme ek fn multiple args leta hai and unko multiple single argument fn mein tod deta hai 
// currying is just a functional programming pattern 


function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

add(1)(2)(3);


// Note -> currying internally closure use krte hai but closures are not currying at all