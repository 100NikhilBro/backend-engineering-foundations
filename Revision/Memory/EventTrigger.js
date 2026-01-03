// Right Way of Implementing Event
// event lgoa to clean bhi kro # Remember it



function triggerEvent() {

    const btn = document.getElementById('btn');

    function handleClick() {
        console.log('Clicked');
    }

    btn.addEventListener('click', handleClick);


    return function() {
        btn.removeEventListener('click', handleClick);
    }


}