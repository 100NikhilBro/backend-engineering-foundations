// // In three Steps

// export const register = (req, res) => {
//     return res.status(201).json({
//         token: 'fake-token'
//     });
// };



// After three steps - refrcatoring it 


import { registerUser } from '../services/auth.service';

export const register = async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) { // When we add that new test Case then we add this 
        return res.status(400).json({ error: 'Invalid input' });
    }

    const token = await registerUser(email, password);

    return res.status(201).json({ token });
};