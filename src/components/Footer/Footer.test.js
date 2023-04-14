import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('should render correct copyright message', () => {
    render(<Footer />);
    const msgElement = screen.getByText(/Family Tree - All rights reserved/i);
    expect(msgElement).toBeInTheDocument();
  });
});
