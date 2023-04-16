import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import FamilyContext from '../../providers/FamilyProvider/FamilyContext';
import { makePerson } from '../../models/Person';

const familyMockData = {
  activeMember: makePerson('john', 25, 'male'),
};

describe('Modal', () => {
  it('should render Modal with header with empty content', () => {
    render(<Modal visible />);

    expect(screen.getByTestId('header')).toBeDefined();
    expect(screen.getByTestId('empty-content')).toHaveTextContent(
      'Please select a member to view their details',
    );
  });

  it('should render Modal with Person details if a member is selected', () => {
    render(
      <FamilyContext.Provider value={familyMockData}>
        <Modal visible />
      </FamilyContext.Provider>,
    );

    expect(screen.getByTestId('member-details')).toBeDefined();
    expect(screen.queryByTestId('empty-content')).toBeNull();
  });
});
