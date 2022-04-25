import React from 'react';
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/named
import { App } from '../App';
// import MyApp from '../MyApp';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
