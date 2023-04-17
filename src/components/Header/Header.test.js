import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should render correct title and hamburger button', () => {
    render(<Header />);

    expect(screen.getByText(/Family Tree/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: 'burger button',
      }),
    ).toBeInTheDocument();
  });
});
