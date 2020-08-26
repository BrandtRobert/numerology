import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders under construction', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This site is under construction/i);
  expect(linkElement).toBeInTheDocument();
});
