// Debounce 
// it delays the fn execution until a specified time has passed since the last event

// Eg ->
// jb apun serachBar like googleSearchBar pr jb kuch searc krte hai like 
//  [ inte                    | SearchBar] 
//  like that to isme hr letter type pr ek call generate hoti hai 
//  between client and server but jaise hi next letter we type 
//  the prvious call got canceled and the new call will started and so on
//  so when it calls become fullfill like it depends on pauseTime(delay) so it is more than that then it hit server
//  in this way debouncing will work 


// Basic Implemntaion

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}