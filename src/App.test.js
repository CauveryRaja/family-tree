import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const msgElement = screen.getByText(/Welcome to React/i);
  expect(msgElement).toBeInTheDocument();
});
