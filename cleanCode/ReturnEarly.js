function registerUser(user) {
    if (user.age >= 18) {
        if (!alreadyExisting(user)) {
            // regiter Logic
        }
    }
}


// return Early - below

function registerUser(user) {

    if (user.age < 18) {
        return
    }

    if (alreadyExisting(user)) {
        return
    }
}