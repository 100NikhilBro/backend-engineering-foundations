import { timeStamp } from 'console';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String

    },
    email: {
        type: String,
        unique: true,
        required: true

    },
    password: {
        type: String,
        required: true
    },
}, {
    timeStamp: true
})


module.exports = mongoose.Schema('User', userSchema);