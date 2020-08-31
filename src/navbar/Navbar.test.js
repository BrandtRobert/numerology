import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom'

test('Navbar renders links', () => {
  const links = [
    {
      name: 'A',
      to: '/A'
    },
    {
      name: 'B',
      to: '/B'
    },
    {
      name: 'C',
      to: '/C'
    }
  ]
  const { getByText } = render(
    <Router>
      <Navbar links={links}/>
    </Router>
  );
  links.forEach((l) => {
    let element = getByText(l.name);
    expect(element).toBeInTheDocument();
  });
});
