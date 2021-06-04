// import chai from 'chai';
// import mocha from 'mocha';
// import axios from 'axios';

const expect = require('chai').expect;
const mocha = require('assert');
const axios = require('axios');

describe('test', function() {
  it('responds to a GET request', function () {
    axios({
      url: "http://localhost:3001/products",
      data: {id: "25167"}
    })
      .then((response) => {
        expect(JSON.stringify(response.data)).to.equal(
          JSON.stringify({
            "id": 25167,
            "campus": "hr-sfo",
            "name": "Camo Onesie",
            "slogan": "Blend in to your crowd",
            "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
            "category": "Jackets",
            "default_price": "140.00",
            "created_at": "2021-06-02T16:53:33.359Z",
            "updated_at": "2021-06-02T16:53:33.359Z",
            "features": [
                {
                    "feature": "Fabric",
                    "value": "Canvas"
                },
                {
                    "feature": "Buttons",
                    "value": "Brass"
                }
            ]
        })
        );
      })
      .catch(console.error)
  });
});

// const request = require('supertest')('http://localhost:3001/product');

/*
describe('GET /product', function() {
  it('responds with json', function(done) {
    request.get('/products')
      .expect(200)
      .expect((res) => {
        expect(JSON.stringify(res.body).to.equal('hello'));
      })
      .end(done);
  });
});
*/


/*
describe('GET /product', function() {
  test('responds with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
*/

