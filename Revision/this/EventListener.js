// in event listener if we add arrowfn with this then it become udefined

button.addEventListener('click', () => {
    console.log(this); // WrongWay
})


button.addEventListener('click', function() {
    console.log(this); // RightWay
})