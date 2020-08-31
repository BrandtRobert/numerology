import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

it('should route to calculator page and render as under construction', () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  fireEvent.click(getByText(/Find your numbers/i));
  const linkElement = getByText(/This site is under construction/i);
  expect(linkElement).toBeInTheDocument();
});

it('should route to home page with numerology description', () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  fireEvent.click(getByText(/What is numerology\?/i));
  const element = getByText(/Welcome to the*/i);
  expect(element).toBeInTheDocument();
});

it('should route to about page with number descriptions', () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  fireEvent.click(getByText(/Meaning of the numbers/i));
  const element = getByText(/Daily Numbers/i);
  expect(element).toBeInTheDocument();
});


