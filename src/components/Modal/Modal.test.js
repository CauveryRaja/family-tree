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

    expect(
      screen.getByRole('heading', {
        level: 2,
      }),
    ).toHaveTextContent('Member Details');
    expect(screen.getByText('Please select a member to view their details')).toBeInTheDocument();
  });

  it('should render Modal with Person details if a member is selected', () => {
    render(
      <FamilyContext.Provider value={familyMockData}>
        <Modal visible />
      </FamilyContext.Provider>,
    );

    expect(
      screen.getByRole('heading', {
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText('john')).toBeInTheDocument();
    expect(
      screen.queryByText('Please select a member to view their details'),
    ).not.toBeInTheDocument();
  });
});
