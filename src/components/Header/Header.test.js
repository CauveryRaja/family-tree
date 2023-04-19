import ModalContext from '../../providers/ModalProvider/ModalContext';
import Header from './Header';
import { fireEvent, render, screen } from '@testing-library/react';

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

  it('should toggle modal when clicking hamburger button', () => {
    const toggleModalVisibility = jest.fn();
    render(
      <ModalContext.Provider
        value={{ modalVisible: true, toggleVisibility: toggleModalVisibility }}
      >
        <Header />
      </ModalContext.Provider>,
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'burger button',
      }),
    );

    expect(toggleModalVisibility).toHaveBeenCalledTimes(1);
  });
});
