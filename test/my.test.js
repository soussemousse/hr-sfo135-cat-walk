const axios = require('axios');
const React = require('react');
// import React from 'react';


// const rtl = require('@testing-library/react')

// const customRender = (ui, options) =>
//   rtl.render(ui, {
//     myDefaultOption: 'something',
//     ...options,
//   })

// module.exports = {
//   ...rtl,
//   render: customRender,
// }

// import { render, screen } from '@testing-library/react';
// import App from './client/index.jsx';

/*
const {render, screen} = require('@testing-library/react');
const dom = require('@testing-library/jest-dom');
// const App = require('./client/index.jsx');

const App = function (props) {
  return (
    <>
    {props.name.map((string, index) =>(<div key={index}>{string}</div>))}
    </>
  );
}

const Hello = () => <h1>Hello World</h1>;

test("first hello test", () => {
  const { container } = render(<App name={['bandicoots', 'hello', 'test']}/>);

  expect(container).toHaveTextContent("bandicoots");
  expect(container).toHaveTextContent("hello");
  expect(container).toHaveTextContent("test");
});
*/

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/hello world/i);
//   expect(linkElement).toBeInTheDocument();
// });



// test('if hello world is rendered', () => {

// })

// test('adds 1 + 2 to equal 3', () => {
//   expect(1+2).toBe(3);
// });

describe('test', function() {
  it('responds to a GET request', function () {
    axios({
      url: "http://localhost:3001/products",
      data: {id: 25167}
    })
      .then((response) => {
        expect(JSON.stringify(response.data)).toBe(
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
