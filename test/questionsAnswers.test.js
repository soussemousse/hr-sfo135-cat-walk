import React from 'react';
import {render, screen} from '@testing-library/react';
import QA from '../client/src/modules/questionsAnswers/questionsAnswers.jsx';

describe('Questions and Answers', () => {
  test('expect Search bar to render', () => {
    const { container } = render(<QA />);

    const searchBar = screen.getByPlaceholderText("Search...");

    expect(container.contains(searchBar)).toBe(true);
  }),

  test('expect 2 Question Items to render', () => {
    const { container } = render(<QA />);

    const questionItems = screen.getAllByText('Question Item');

    expect(questionItems.length).toBe(2);
  })

})