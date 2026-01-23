
## Jest – Core Testing Keywords

| Keyword / Method     | Kya karta hai (Simple meaning)                    | Example |
|----------------------|--------------------------------------------------|---------|
| describe()           | Tests ko group karta hai                         | describe('Auth API', () => {}) |
| it() / test()        | Ek test case define karta hai                    | it('should login user', () => {}) |
| expect()             | Expected result check karta hai                  | expect(res.status) |
| toBe()               | Exact match check karta hai                      | expect(res.status).toBe(200) |
| toEqual()            | Deep equality (object / array) check karta hai   | expect(res.body).toEqual({...}) |
| toBeDefined()        | Value exist karti hai ya nahi                    | expect(token).toBeDefined() |
| toBeTruthy()         | Truthy value check karta hai                     | expect(isValid).toBeTruthy() |
| toContain()          | Array / string ke andar value check karta hai    | expect(arr).toContain(id) |
| beforeAll()          | Sab tests se pehle run hota hai                  | beforeAll(() => connectDB()) |
| afterAll()           | Sab tests ke baad run hota hai                   | afterAll(() => closeDB()) |
| beforeEach()         | Har test se pehle run hota hai                   | beforeEach(() => clearDB()) |
| afterEach()          | Har test ke baad run hota hai                    | afterEach(() => cleanup()) |



## Supertest – API Testing Helpers

| Method / Function     | Kya karta hai (Simple meaning)                    | Example |
|-----------------------|--------------------------------------------------|---------|
| request(app)          | Express app ko test ke liye wrap karta hai       | request(app) |
| .get()                | GET request bhejta hai                           | .get('/users') |
| .post()               | POST request bhejta hai                          | .post('/auth/register') |
| .put()                | PUT request bhejta hai                           | .put('/users/1') |
| .delete()             | DELETE request bhejta hai                        | .delete('/users/1') |
| .send()               | Request body bhejta hai                          | .send({ email, pass }) |
| .set()                | Headers set karta hai                            | .set('Authorization', 'Bearer token') |
| res.status            | Response status code                             | res.status |
| res.body              | Response body (JSON)                             | res.body.token |
| res.headers           | Response headers                                 | res.headers['content-type'] |


## Jest vs Supertest

| Tool       | Role                               | Kya karta hai |
|------------|------------------------------------|---------------|
| Jest       | Test runner + assertion library    | Test likhna, run karna, pass/fail decide |
| Supertest  | HTTP testing library               | Express API ko hit karta hai (GET/POST etc.) |



```ts
import request from 'supertest';
import app from '../app';

describe('Register API', () => {
  it('should register user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        email: 'test@mail.com',
        password: '123456'
      });

    expect(res.status).toBe(201);
    expect(res.body.token).toBeDefined();
  });
});
