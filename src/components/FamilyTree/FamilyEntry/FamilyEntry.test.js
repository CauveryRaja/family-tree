import { render, screen } from '@testing-library/react';
import FamilyEntry from './FamilyEntry';
import { makePerson } from '../../../models/Person';

const person = makePerson('john', 25, 'male');

describe('FamilyEntry', () => {
  it('should render a single person node', () => {
    render(<FamilyEntry person={person} />);

    expect(
      screen.getByRole('button', {
        name: 'john',
      }),
    ).toBeInTheDocument();
  });

  it('should render a pair if spouse is available', () => {
    const spouse = makePerson('priya', 25, 'female');
    render(<FamilyEntry person={makePerson('ram', 30, 'male', spouse)} />);

    expect(
      screen.getAllByRole('button', {
        name: 'ram',
      })[0],
    ).toBeInTheDocument();
    expect(screen.getByTestId('priya-node')).toBeDefined();
  });
});
