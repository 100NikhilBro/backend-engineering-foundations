// buubling -> child to parent


const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener('click', function() {
    console.log('div');
})

button.addEventListener('click', function() {
    console.log('btn');
})


// Browser Console -> btn - div