const app = require('../../app')
const request = require('supertest')
const Mother = require('../../models/mother')
const mockingoose = require('mockingoose');
const SessionsController = require('../../controllers/sessions');


app.use(express.json())
app.use("/sessions", SessionsController)
describe('session login', () => {
 
  it('returns signed in user if email and password correct', async () => {
    const email = "eddie@me.com"

    mockingoose(Mother).toReturn(
      {
        _id: '507f191e810c19729de860ea',
        name: 'name',
        email: 'name@email.com',
        password: '12345'
      }, 'findOne'
    )
    
      const res = await request(app)
      .post('/sessions/login')
      .send({email: "someone@example.com", password: "password"})
      
      expect(res.statusCode).toEqual(201);
      expect(res.body.email).toEqual("someone@example.com");
      expect(res.body.token).toContain("Bearer")
  });
  it('returns status code 400 if only password filled in', async () => {
      const res = await request(app)
      .post('/sessions/login')
      .send({ email: "someone@example.com"})

      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual('Invalid credentials');
  });
});