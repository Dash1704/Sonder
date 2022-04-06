const app = require('../../app')
const request = require('supertest')
const User = require('../../models/users')
const mockingoose = require('mockingoose');



describe('session login', () => {

  beforeEach(() => {
    mockingoose.resetAll();
  });
 
  it('returns signed in user if email and password correct', async () => {
    const email = "eddie@me.com"

    mockingoose(User).toReturn(
      {
        _id: '507f191e810c19729de860ea',
        name: 'name',
        email: 'name@email.com',
        password: '12345'
      }, 'findOne'
    )
    
      const res = await request(app)
      .post('/sessions/login')
      .send({email: "chris@chris.com", password: "12345"})
      
      expect(res.statusCode).toEqual(201);
      expect(res.body.email).toEqual("chris@chris.com");
      expect(res.body.token).toContain("Bearer")
  });
  it('returns status code 400 if only password filled in', async () => {
      const res = await request(app)
      .post('/sessions/login')
      .send({ email: "chris@chris.com"})

      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual('Invalid credentials');
  });
});