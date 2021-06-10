import axios from 'axios';
import React from 'react';
import {render, screen} from '@testing-library/react';
import dom from '@testing-library/jest-dom';
import Related from '../client/src/modules/RelatedProducts/RelatedProductsYourOutfit.jsx';
import RelatedProducts from '../client/src/modules/RelatedProducts/RelatedProducts.jsx';
import RelatedCard from '../client/src/modules/RelatedProducts/RelatedCard.jsx';

const sampleProductsArr = [{
  "id": 25168,
  "campus": "hr-sfo",
  "name": "Bright Future Sunglasses",
  "slogan": "You've got to wear shades",
  "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
  "category": "Accessories",
  "default_price": "69.00",
  "created_at": "2021-06-02T16:53:33.359Z",
  "updated_at": "2021-06-02T16:53:33.359Z",
  "features": [
      {
          "feature": "Lenses",
          "value": "Ultrasheen"
      },
      {
          "feature": "UV Protection",
          "value": null
      },
      {
          "feature": "Frames",
          "value": "LightCompose"
      }
  ]
},
{
  "id": 25169,
  "campus": "hr-sfo",
  "name": "Morning Joggers",
  "slogan": "Make yourself a morning person",
  "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
  "category": "Pants",
  "default_price": "40.00",
  "created_at": "2021-06-02T16:53:33.359Z",
  "updated_at": "2021-06-02T16:53:33.359Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "100% Cotton"
      },
      {
          "feature": "Cut",
          "value": "Skinny"
      }
  ]
}];

//test for axios request to retrieve all related products

describe('responds to a GET request', function() {
  test('responds with all the related products', function () {
    return axios({
      method: "get",
      url: "http://localhost:3001/related/25167",
      params: {
        ID: 25167
      }
    })
      .then((response) => {
        expect((response.data)).toBe([
          {
              "id": 25168,
              "campus": "hr-sfo",
              "name": "Bright Future Sunglasses",
              "slogan": "You've got to wear shades",
              "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
              "category": "Accessories",
              "default_price": "69.00",
              "created_at": "2021-06-02T16:53:33.359Z",
              "updated_at": "2021-06-02T16:53:33.359Z",
              "features": [
                  {
                      "feature": "Lenses",
                      "value": "Ultrasheen"
                  },
                  {
                      "feature": "UV Protection",
                      "value": null
                  },
                  {
                      "feature": "Frames",
                      "value": "LightCompose"
                  }
              ]
          },
          {
              "id": 25169,
              "campus": "hr-sfo",
              "name": "Morning Joggers",
              "slogan": "Make yourself a morning person",
              "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
              "category": "Pants",
              "default_price": "40.00",
              "created_at": "2021-06-02T16:53:33.359Z",
              "updated_at": "2021-06-02T16:53:33.359Z",
              "features": [
                  {
                      "feature": "Fabric",
                      "value": "100% Cotton"
                  },
                  {
                      "feature": "Cut",
                      "value": "Skinny"
                  }
              ]
          },
          {
              "id": 25174,
              "campus": "hr-sfo",
              "name": "YEasy 350",
              "slogan": "Just jumped over jumpman",
              "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
              "category": "Kicks",
              "default_price": "450.00",
              "created_at": "2021-06-02T16:53:33.359Z",
              "updated_at": "2021-06-02T16:53:33.359Z",
              "features": [
                  {
                      "feature": "Sole",
                      "value": "Rubber"
                  },
                  {
                      "feature": "Material",
                      "value": "FullControlSkin"
                  },
                  {
                      "feature": "Stitching",
                      "value": "Double Stitch"
                  }
              ]
          },
          {
              "id": 25173,
              "campus": "hr-sfo",
              "name": "Blues Suede Shoes",
              "slogan": "2019 Stanley Cup Limited Edition",
              "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
              "category": "Dress Shoes",
              "default_price": "120.00",
              "created_at": "2021-06-02T16:53:33.359Z",
              "updated_at": "2021-06-02T16:53:33.359Z",
              "features": [
                  {
                      "feature": "Sole",
                      "value": "Rubber"
                  },
                  {
                      "feature": "Material",
                      "value": "FullControlSkin"
                  },
                  {
                      "feature": "Stitching",
                      "value": "Double Stitch"
                  }
              ]
          }
      ]);
      })
      .catch(err => console.log(err))
  });
});

//test for Related Products list and Product Cards
describe('Related Products and Your Outfit', () => {
  test('expect "Related Products" and "Your Outfit" headers', () => {
    render(<Related />);

    const relatedElement = screen.getByText('Related Products');
    const outfitEl = screen.getByText('Your Outfit');

    expect(relatedElement).toBeInTheDocument();
    expect(outfitEl).toBeInTheDocument();
  })
})

describe('Related Products should show cards of other products', () => {
  test('expect to have arrow buttons and up to five cards', () => {
    render(<RelatedProducts products={sampleProductsArr} />);

    const buttons = screen.getAllByRole('button');
    const cards = screen.getAllByRole('article');

    expect(buttons).toHaveLength(2);
    expect(cards).toHaveLength(2);
  })
})

describe('Related Products cards should show category, name, price, rating, and image of product', () => {
  test('expect to have all relevant information', () =>  {
    render(<RelatedCard product={sampleProductsArr[0]} />);

    const productName = screen.getByText('Bright Future Sunglasses');
    const category = screen.getByText('Accessories');
    const price = screen.getByText('69.00');
    const rating = screen.getByText('Rating');

    expect(productName).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  })
})