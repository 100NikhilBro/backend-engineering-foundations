// Note - In JS  Inheritence is happen but not by classes but by the prototypal Chaining

// Now , What is Exactly that Prototpal Chaining is ?

// Firstly we have to know that there are two words one is Prototype and other is _proto_
// so what is the diff between them 
// _proto_ -> this is the actual link that point towards its parent 
// prototype -> it is a blueprint for classes fn or constructor

// How it works?

// like hota kya hai -> dekho sbse pehle object mein dhoodh jata hai then uske parent mein 
//  aur jo parent hai na isko hi apun prototype bolte hai in general

//  _proto_ -> _proto_ -> _proto_ -> null ----> jaise hi null milta hai we have to stop



// Object.create() --> so it used to create prototype manually for a newObject

const Proto = {
    showProtoName() {
        console.log('ProtoChild');
    }
}

const protoChild = Object.create(Proto);

protoChild.showProtoName();