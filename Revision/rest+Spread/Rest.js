// Rest -> collect yaa pack 

// function argumnents --> // saare arguments ki ek array bnakr de dega -> middleware chaining mein hum use krte hai 

function logRequests(...requests) {
    console.log(requests);
}


// Destruturing ke saath use krna 

const reqBody = {
    email: "a@b.com",
    password: "123",
    role: "user"
}

// safeData -> mein password ke alava sb kuch
// Response ko sensitive field se htana 
const { password, ...safeData } = reqBody;




// firstLog d/f baaki ek array hai 
const logs = ['req1', 'req2', 'req3'];
const [first, ...remaining] = logs;