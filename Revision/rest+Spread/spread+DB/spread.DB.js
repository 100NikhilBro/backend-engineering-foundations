// 1 -> mongodb update payload

const updatePayload = {
    ...req.body,
    updateAt: new Date()
}

await User.updateOne({ _id }, updatePayload);



// 2 -> patch Api - partialUpdates


const allowFields = ["name", "email"];

const filteredBody = Object.fromEntries(
    Object.entries(req.body).filter(
        ([key]) => allowFields.includes(key)
    )
)

const dataToUpdate = {
    ...filteredBody,
    updateAt: new Date()
}





// Rest+Spread

// Input se password hta diya 
// output mein metedata add kiya 

function createUser({ password, ...userData }) {
    return {
        ...userData,
        createdAt: new Date()
    }
}








// ExpressMilddleware 

app.use((req, res, next) => {
    req.context = {
        ...req.context,
        requestId: crypto.randomUUID()
    };
    next();
})



// spread - shallow copy create krega deep nhi