import axios from 'axios';
import React from 'react';
import {render, screen} from '@testing-library/react';
import dom from '@testing-library/jest-dom';
import Related from '../client/src/modules/RelatedProducts/RelatedProductsYourOutfit.jsx';

describe('Related Products and Your Outfit', () => {
  test('expect "Related Products" and "Your Outfit" headers', () => {
    render(<Related />);

    const relatedElement = screen.getByText('Related Products');
    const outfitEl = screen.getByText('Your Outfit');

    expect(relatedElement).toBeInTheDocument();
    expect(outfitEl).toBeInTheDocument();
  })
})