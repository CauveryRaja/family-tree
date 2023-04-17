import { render, screen } from '@testing-library/react';
import Node from './Node';
import { makePerson } from '../../../models/Person';

const person = makePerson('john', 25, 'male');

describe('Node', () => {
  it('should render indicator and name', () => {
    render(<Node data={person} />);

    expect(
      screen.getByRole('button', {
        name: 'john',
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('john')).toBeInTheDocument();
  });

  it('should render blue indicator for a man', () => {
    render(<Node data={person} />);

    expect(
      screen.getByRole('button', {
        name: 'john',
      }),
    ).toHaveStyle({
      backgroundColor: 'lightblue',
    });
  });

  it('should render blue indicator for a woman', () => {
    render(<Node data={makePerson('kavi', 18, 'female')} />);

    expect(
      screen.getByRole('button', {
        name: 'kavi',
      }),
    ).toHaveStyle({
      backgroundColor: 'pink',
    });
  });
});
