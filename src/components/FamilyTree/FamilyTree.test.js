import { render, screen } from '@testing-library/react';
import FamilyTree from './FamilyTree';
import { makePerson } from '../../models/Person';

const person = makePerson('John', 25, 'male');

describe('FamilyTree', () => {
  it('should render root node with Info section', () => {
    render(<FamilyTree root={person} />);

    expect(screen.getByText(/Take a look at John's family tree/i)).toBeInTheDocument();
    expect(screen.getAllByText(/John/i)[1]).toBeInTheDocument();
    expect(screen.getByText('Select a person to view their details')).toBeInTheDocument();
    expect(screen.getByText('Man')).toBeInTheDocument();
    expect(screen.getByText('Woman')).toBeInTheDocument();
  });
});
