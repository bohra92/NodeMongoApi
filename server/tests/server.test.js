const request = require('supertest');
const expect = require('expect');

const {
  app
} = require('./../server.js')

describe('POST /bbc test', () => {
  it('should create a new member', (done) => {
    request(app)
      .post('/bbc')
      .send({
        "firstName": "Tanuj",
        "lastName": "Bohra",
        "age": "26",
        "moduleName": "Childrens",
        "experience": "3yrs",
        "email": "bohratanuj@gmail.com",
        "hometown": "Jodhpur"
      })
      .expect(2100)
      .end(done)
  })
})
