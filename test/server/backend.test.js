const axios = require('axios');

// test('API', function() {
  it('should respond to a reviews GET request', function () {
    axios({
      url: "http://localhost:3001/reviews",
      data: {id: 25167}
    })
      .then((response) => {
        expect(JSON.stringify(response.data)).toBe(
          JSON.stringify({
            "product": "25167",
            "page": 0,
            "count": 5,
            "results": [
                {
                    "review_id": 406630,
                    "rating": 5,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "test post",
                    "helpfulness": 0,
                    "photos": []
                },
                {
                    "review_id": 406629,
                    "rating": 3,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "Jackets",
                    "helpfulness": 0,
                    "photos": []
                },
                {
                    "review_id": 406628,
                    "rating": 3,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "Jackets",
                    "helpfulness": 0,
                    "photos": []
                },
                {
                    "review_id": 406627,
                    "rating": 5,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "Jackets",
                    "helpfulness": 0,
                    "photos": []
                },
                {
                    "review_id": 406626,
                    "rating": 5,
                    "summary": "Camo Onesie",
                    "recommend": true,
                    "response": null,
                    "body": "Blend in to your crowd",
                    "date": "2021-06-07T00:00:00.000Z",
                    "reviewer_name": "Jackets",
                    "helpfulness": 0,
                    "photos": []
                }
            ]
          })
        );
      })
      .catch(console.error)
  });
// });