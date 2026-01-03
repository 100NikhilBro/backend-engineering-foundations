// this -> value depends -> callSite not function definition
// this -> arrowFn - bind nhi krta 
// Why this not bind with arrow fn -> because arrowfn ke pass khud ka this nhi hota woh lexical this ka use krte hai 

function basic() {
    console.log(this);
}

// jo bhi yeh basic fn ka this hai yeh undefined bhi ho skta hai aur browser|window 
// it depends on mode of restriction
// if it is strict - undefined
// if it is non-restrict - window/browser