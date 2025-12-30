function hasPermission(user) {
    if (user.role === 'admin') {
        return true;
    } else {
        return false;
    }
}


// upar wale function ko asie bhi likh skte hai 

function hasPermission(user) {
    return user.role === 'admin';
}