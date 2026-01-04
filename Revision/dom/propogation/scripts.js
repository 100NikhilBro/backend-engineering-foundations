// stop propgation -> like jispe bhi apun ne stop propogation lga diya uska simply mtlb yeh hai ki 
// bhai propgate mt kro like bs apna kaam kro aur kuch nhi 


// BrowserConsole - pr sirf btn aayega ab 


const div = document.querySelector('div');
const btn = document.querySelector('button');

div.addEventListener('clcik', () => {
    console.log('div');
})

btn.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('button');
})





// stopImmediatePropogation 
// -> isko basically apne ko jb use krna hota hai jb ek button pr many event ho aur hum chha rha hai kie 
// woh use event ke aange na jaye