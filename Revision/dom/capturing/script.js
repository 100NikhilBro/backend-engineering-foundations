// capturing -> parent to child

const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener('click', function() {
    console.log('div');
}, true);

button.addEventListener('click', function() {
    console.log('button');
}, true);



// Browser Console -> div -> btn