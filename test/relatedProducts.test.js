import axios from 'axios';
import React from 'react';
import {render, screen, waitFor, fireEvent, cleanup} from '@testing-library/react';
import dom from '@testing-library/jest-dom';
import Related from '/Users/Emma/HackReactorApril2021/hr-sfo135-cat-walk/client/src/modules/RelatedProducts/RelatedProductsYourOutfit.jsx';
import RelatedProducts from '../client/src/modules/RelatedProducts/RelatedProducts.jsx';
import ProductCard from '../client/src/modules/RelatedProducts/ProductCard.jsx';
import YourOutfit from '../client/src/modules/RelatedProducts/YourOutfit.jsx';
import AddProduct from '../client/src/modules/RelatedProducts/AddProductCard.jsx';
import CompareProducts from '../client/src/modules/RelatedProducts/CompareProducts.jsx';

afterEach(cleanup);

const sampleProductsArr = [{
  "productDetails": [25168, "Bright Future Sunglasses", "Accessories", "69.00", [{"feature": "Lenses", "value": "Ultrasheen"},{"feature": "UV Protection", "value": null}, {"feature": "Frames", "value": "LightCompose"}]],
  "productPhotos": [null, {"thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}],
  "ratings": {
    1: "0",
    2: "5",
    3: "4",
    4: "2",
    5: "0"
  }
},
{
  "productDetails": [25169, "Morning Joggers", "Pants", "40.00", [{"feature": "Fabric", "value": "100% Cotton"},{"feature": "Cut",
 "value": "Skinny"}]],
  "productPhotos": ["30.00", {"thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}],
  "ratings": {
    1: "0",
    2: "0",
    3: "2",
    4: "1",
    5: "3"
  }
}];

//tests axios get request for related products list

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
        expect((response.data)).toBe([25168, 25169, 25174, 25173]);
      })
      .catch(err => console.log(err))
  });
});

//tests axios post request with related products list to get product details

describe('responds to a POST request', function() {
  test('responds with product information, photos, and ratings for each related product in list', function () {
    return axios({
      method: "post",
      url: "http://localhost:3001/related/productInfo",
      data: {
        products: [25171, 25175, 25173, 25168, 25167]
      }
    })
      .then((response) => {
        expect(response.data).toHaveLength(5);
        expect(response.data[0]).toHaveLength(3);
        expect(response.data[0][0]).toHaveLength(5)
        expect(response.data[3][1][0]).toBe(null);
        expect(response.data[2][0][3]).toBe("120.00");
      })
      .catch(err => console.log(err));
  })
})

//tests axios get request for current product information

describe('responds to a GET request for current product', function() {
  test('responds with product information, photos, and ratings for current product', function () {
    return axios({
      method: "get",
      url: "http//localhost:3001/currentProduct/25169",
      params: {
        ID: 25169
      }
    })
      .then((response) => {
        expect(response.data).toHaveLength(3);
        expect(response.data[0][2]).toBe("Pants");
        expect(response.data[0][1]).toBe("Morning Joggers");
        expect(response.data[1][0]).toBe(null);
      })
      .catch(err => console.log(err));
  })
})

//Related Products Tests

describe('Related Products and Your Outfit', () => {
  test('expect "Related Products" and "Your Outfit" headers', () => {
    render(<Related currentProduct={sampleProductsArr[0]}/>);

    const productLists = screen.getAllByTestId('list');
    const relatedElement = screen.getByText('Related Products');
    const outfitEl = screen.getByText('Your Outfit');

    expect(relatedElement).toBeInTheDocument();
    expect(outfitEl).toBeInTheDocument();
    expect(productLists).toHaveLength(2);
  })
})

describe('Related Products should have carousel button', () => {
  test('expect button to change cards shown', () => {
    render(<RelatedProducts products={sampleProductsArr} relatedInfo={{start: 0, end: 0, relatedProductsList: sampleProductsArr}} caroselClickLeft={(event) => {console.log('clicked')}} caroselClickRight={(event) => {console.log('clicked')}} />);

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Morning Joggers')).toBeInTheDocument();
  })
})

describe('Related Products should show cards of other products', () => {
  test('expect to have arrow buttons and up to five cards', () => {
    render(<RelatedProducts products={sampleProductsArr} relatedInfo={{start: 0, end: 2, relatedProductsList: sampleProductsArr}} caroselClickLeft={(event) => {console.log('clicked')}} caroselClickRight={(event) => {console.log('clicked')}} />);

    const cards = screen.getAllByRole('article');

    expect(cards).toHaveLength(2);
  })
})

describe('Related Products cards should show category, name, price, rating, and image of product', () => {
  test('expect to have all relevant information', () =>  {
    render(<ProductCard product={sampleProductsArr[0]} />);

    const productName = screen.getByText('Bright Future Sunglasses');
    const category = screen.getByText('Accessories');
    const price = screen.getByText('69.00');
    const rating = screen.getByTestId('rating');

    expect(productName).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  })
})

describe('Related cards should have clickable functionality', function() {
  test('expect clickable action button and card body', function () {
    const open = jest.fn();
    const cardClick = jest.fn();

<<<<<<< HEAD
    render(<RelatedCard product={sampleProductsArr[0]} open={open} cardClick={cardClick}/>);

    fireEvent.click(screen.getByTestId('showComparison'));
=======
    render(<ProductCard product={sampleProductsArr[0]} actionButton={open} cardClick={cardClick}/>);

    fireEvent.click(screen.getByTestId('actionButton'));
>>>>>>> 238079c2f6dff8e33e7c75c69431092d98ad579c
    fireEvent.click(screen.getByTestId('clickedCard'));

    expect(open).toHaveBeenCalledTimes(1);
    expect(cardClick).toHaveBeenCalledTimes(1);
  })
})

describe('Comparison table should compare two products', function() {
  test('expect both product names and their features to be in the table', function () {
    const relatedPortal = document.createElement('div');
    relatedPortal.setAttribute('id', 'related-portal');
    document.body.append(relatedPortal);

    render(<CompareProducts currentProduct={sampleProductsArr[0]} compareProduct={sampleProductsArr[1]}/>);

    const currentName = screen.getByText('Bright Future Sunglasses');
    const compareName = screen.getByText('Morning Joggers');

    expect(currentName).toBeInTheDocument();
    expect(compareName).toBeInTheDocument();
    relatedPortal.remove();
  })
})

describe('Comparison table button', function() {
  test('expect table to have a close button', function () {
    const relatedPortal = document.createElement('div');
    relatedPortal.setAttribute('id', 'related-portal');
    document.body.append(relatedPortal);
    const close = jest.fn();

    render(<CompareProducts currentProduct={sampleProductsArr[0]} compareProduct={sampleProductsArr[1]} close={close}/>);

    fireEvent.click(screen.getByTestId('closeButton'));

    expect(close).toHaveBeenCalledTimes(1);
    relatedPortal.remove();
  })
})

describe('Comparison table should compare features of two products', function() {
  test('expect features of both products to be in the table', function () {
    const relatedPortal = document.createElement('div');
    relatedPortal.setAttribute('id', 'related-portal');
    document.body.append(relatedPortal);
    const close = jest.fn();

    render(<CompareProducts currentProduct={sampleProductsArr[0]} compareProduct={sampleProductsArr[1]} close={close}/>);

    expect(screen.getByText('Fabric')).toBeInTheDocument();
    expect(screen.getByText('Lenses')).toBeInTheDocument();
    expect(screen.getByText('LightCompose')).toBeInTheDocument();
    expect(screen.getByText('Skinny')).toBeInTheDocument();
    relatedPortal.remove();
  })
})
//your outfit tests
  //HAVE
    //test that there is a list
    //test there are cards
    //test there is add product
    //test add card button
  //NEED
    //refactor cards have pic and rating
    //test carosel buttons
    //test your outfit action button

describe('Your Outfit should show cards of user added products', () => {
  test('expect to have arrow buttons and up to five cards', () => {
    render(<YourOutfit products={sampleProductsArr} outfitInfo={{start: 0, end: 2, yourOutfit: sampleProductsArr}} caroselClickLeft={(event) => {console.log('clicked')}} caroselClickRight={(event) => {console.log('clicked')}} addToOutfit={(event) => {console.log('added')}}/>);

    const cards = screen.getAllByRole('article');
    const addCard = screen.getByText('Add to Your Outfit');

    expect(cards).toHaveLength(2);
    expect(addCard).toBeInTheDocument();
  })
})

describe('Your Outfit cards should show category, name, price, rating, and image of product', () => {
  test('expect to have all relevant information', () =>  {
    render(<ProductCard product={sampleProductsArr[0]} />);

    const productName = screen.getByText('Bright Future Sunglasses');
    const category = screen.getByText('Accessories');
    const price = screen.getByText('69.00');
    const rating = screen.getByTestId('rating');

    expect(productName).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  })
})

describe('Add Product Card should inform what it is for', () => {
  test('expect to have plus button and caption \'Add to Your Outfit\'', () => {
    render(<AddProduct addToOutfit={(event, product) => {console.log(product)}} />);

    const addButton = screen.getAllByRole('radio');
    const caption = screen.getByText('Add to Your Outfit');

    expect(addButton).toHaveLength(1);
    expect(caption). toBeInTheDocument();
  })
})

describe('Add product button should add current product to Your Outfit', () => {
  test('expect add product button to increase your outfit by one', () => {
    localStorage.clear();

    render(<Related currentProduct={sampleProductsArr[0]}/>);

    fireEvent.click(screen.getByTestId('addProduct'));

<<<<<<< HEAD
    expect(screen.getAllByTestId('outfitCard')).toHaveLength(1);
=======
    expect(screen.getAllByTestId('ProductCard')).toHaveLength(1);
>>>>>>> 238079c2f6dff8e33e7c75c69431092d98ad579c
    localStorage.clear();
  })
})