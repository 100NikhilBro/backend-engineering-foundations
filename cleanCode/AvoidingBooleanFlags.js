function registerUser(user, shouldReturnToken) {

    // regiter user Logic

    const newUser = { name: "NG" };

    if (shouldReturnToken) {
        newUser.token = 'token';
    }

    return newUser;
}


const SHOULD_RETURN_TOKEN = true; // We can also use Enums here


registerUser({}, SHOULD_RETURN_TOKEN);