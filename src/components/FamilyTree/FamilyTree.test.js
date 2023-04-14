import { render, screen } from '@testing-library/react';
import FamilyTree from './FamilyTree';
import { makePerson } from '../../models/Person';

const person = makePerson('john', 25, 'male');

describe('FamilyTree', () => {
  it('should render root node', () => {
    render(<FamilyTree root={person} />);

    expect(screen.getByTestId('john-node')).toBeDefined();
    expect(screen.getByTestId('legend')).toBeDefined();
  });
});
