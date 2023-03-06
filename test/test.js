import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../Express Database/server';

chai.should();
chai.use(chaiHttp);
describe('App unit testing', () => {
  describe('Get Type unit Testing', () => {
    it('Get all users', (done) => {
      chai.request(server).get('/user').end((err, response) => {
        if (err) {
          console.log(err);
        } else {
          response.should.have.status(201);
          response.body.should.be.a('array');
        }
      });
      done();
    });
  });
});
