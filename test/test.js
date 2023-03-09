import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

const { expect } = chai;
chai.use(chaiHttp);
describe('GET /user', () => {
  it('should return all users', (done) => {
    chai
      .request(app)
      .get('/user')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
describe('User Login API', () => {
  it('should return a JWT token on successful login', (done) => {
    chai.request('http://localhost:3000')
      .post('/user/login')
      .send({ email: 'shashwat@gmail.com', password: '1234' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.token).to.be.a('string');
        // Verify the JWT token
        const decodedToken = jwt.verify(res.body.token, 'TaRaRamPamPam');
        done();
      });
  });
});
describe('POST /user', () => {
  it('should return status code 201 and a success message on successful creation', async (done) => {
    const res = await chai.request('http://localhost:3000')
      .post('/user')
      .send({
        fullName: 'Shashwat Mohite',
        email: 'shashwat@gmail.com',
        phoneNumber: 476221123,
        gender: 'Male',
        role: 'Seller',
        password: '1234',
      });
    // console.log("test case runs")
    expect(res).to.have.status(201);
    done();
  });
});
