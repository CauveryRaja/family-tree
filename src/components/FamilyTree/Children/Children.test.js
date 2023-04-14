import { render, screen } from '@testing-library/react';
import Children from './Children';
import { makePerson } from '../../../models/Person';

const children = [makePerson('raja', 25, 'female'), makePerson('priya', 25, 'female')];

describe('Children', () => {
  it('should render all children', () => {
    render(<Children nodes={children} />);

    expect(screen.getByTestId('children')).toBeDefined();
    expect(screen.getByTestId('raja-node')).toBeDefined();
    expect(screen.getByTestId('priya-node')).toBeDefined();
    expect(screen.getByTestId('connector')).toBeDefined();
  });

  it('should not display horizontal connecting line for a single child', () => {
    render(<Children nodes={[makePerson('raja', 25, 'female')]} />);

    expect(screen.getByTestId('raja-node')).toBeDefined();
    expect(screen.getByTestId('connector')).toHaveStyle({
      width: 0,
    });
  });
});
