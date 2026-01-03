function Greet(city) {
    console.log(this.name, city);
}

// call - ImmediatelyInvoked+Pass

Greet.call({ name: 'Nikhil' }, "Orai");

// Apply - similiar to call hai but isme apun argumnetedArrayPass kr skte hai

Greet.apply({ name: 'Nikhil' }, ['Orai']);

// bind - yeh boundedFn return krta hai not immediately invoked

const boundedFn = Greet.bind({ name: 'Nikhil' }, 'Kanpur');
boundedFn();