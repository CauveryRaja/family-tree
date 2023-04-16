import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should render correct title and hamburger button', () => {
    render(<Header />);
    const msgElement = screen.getByText(/Family Tree/i);

    expect(msgElement).toBeInTheDocument();
    expect(screen.getByTestId('burger-button')).toBeDefined();
  });
});
