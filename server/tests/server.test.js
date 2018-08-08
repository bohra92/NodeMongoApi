const request = require('supertest');
const expect = require('expect');

const {
  app
} = require('./../server.js')
const {
  offshoreMember
} = require('./../models/offshore')

beforeEach((done) => {
  offshoreMember.remove({}).then(() => done());
});

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
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
      });

    setTimeout(() => {
      offshoreMember.find().then((members) => {
        expect(members.length).toBe(1);
        expect(members[0].age).toBe(26);
        done();
      }).catch((e) => done(e));
    }, 1000)
  });
})
