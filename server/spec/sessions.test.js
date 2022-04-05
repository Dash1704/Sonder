const jwt = require('jsonwebtoken')
const sessions = require('../controllers/sessions')

describe('sessions requests',  () => {
  it('returns a json web token', (done) => {
    const req = {body: {
      email: "123",
      password: "123"
    }
  }
    const res = {
      json: jest.fn()
    }
    sessions.Create(req, res)
    expect( res.json.mock.calls[ 0 ][ 0 ] ).toBe( 'jwt' )
    done()
  })
})