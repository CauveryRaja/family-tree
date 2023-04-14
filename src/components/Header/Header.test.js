import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should render correct title', () => {
    render(<Header />);
    const msgElement = screen.getByText(/Family Tree/i);
    expect(msgElement).toBeInTheDocument();
  });
});
