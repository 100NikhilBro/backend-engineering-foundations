// When u run the test - npm test - "test":"jest --watchAll" - in pakcage.json 


// 1. Firstly we have write the test

import request from 'supertest';
import app from '../app';


describe('Auth Register', () => {
    it('should register user and return token', async() => {
        const res = await request(app)
            .post('/auth/register')
            .send({
                email: "test@gmail.com",
                password: "password",
            })

        expect(res.status).toBe(201);
        expect(res.body.token).toBeDefined();

    })
})


// 2. When we write this test - run - npm test -> it fails -> then we add the minimal code to work
// 3. minimal Code to work - we go our routes and add that route




// ===================================>> after all this add code to controller to make it more logical





// new Test Case Added

it('should fail if email missing', async() => {
    const res = await request(app)
        .post('/auth/register')
        .send({
            password: '123456'
        });

    expect(res.status).toBe(400);
});







// alreadyExits

import request from 'supertest';
import app from '../app';

describe('Aleady-Exists',()=>{
    it('test',async()=>{

        // First regiteration - Why this - for already in DB 
         await request(app).
            post(url).
            send({
                name:"abc",
                email:"abc@gmail.com",
                passwrod:"test@123"
            })

        // second regitration - make it laredy existed due to first 
      const res = await request(app).
            post(url).
            send({
                name:"abc",
                email:"abc@gmail.com",
                passwrod:"test@123"
            })

        expect(res.status).tobe(401);
    })
})

// Now we run - our controller has not that thing so we have to update this like that 
// in controller - in regiterFunction - User.findOne(email) - if already exists - 'User already exits' = that check 













