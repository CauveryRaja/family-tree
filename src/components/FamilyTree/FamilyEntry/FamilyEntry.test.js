import { render, screen } from '@testing-library/react';
import FamilyEntry from './FamilyEntry';
import { makePerson } from '../../../models/Person';

const person = makePerson('john', 25, 'male');

describe('FamilyEntry', () => {
  it('should render a single person node', () => {
    render(<FamilyEntry person={person} />);

    expect(screen.getByTestId('john-node')).toBeDefined();
  });

  it('should render a pair if spouse is available', () => {
    const spouse = makePerson('priya', 25, 'female');
    render(<FamilyEntry person={makePerson('ram', 30, 'male', spouse)} />);

    expect(screen.getByTestId('pair')).toBeDefined();
    expect(screen.getByTestId('ram-node')).toBeDefined();
    expect(screen.getByTestId('priya-node')).toBeDefined();
  });
});
