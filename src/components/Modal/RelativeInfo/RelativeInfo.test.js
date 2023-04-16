import { fireEvent, render, screen } from '@testing-library/react';
import RelativeInfo from './RelativeInfo';
import { makePerson } from '../../../models/Person';
import { findPersonByRelation } from '../../../utils/familyHelpers';

jest.mock('../../../utils/familyHelpers');

describe('RelativeInfo', () => {
  it('should render select box with no relative', () => {
    render(<RelativeInfo person={makePerson('max', 22, 'male')} />);

    expect(screen.getByTestId('select-box')).toBeDefined();
    expect(screen.getByTestId('relative')).toHaveTextContent('None');
  });

  it('should fetch correct person as per selected relation', () => {
    const person = makePerson('max', 22, 'male');
    render(<RelativeInfo person={person} />);

    fireEvent.change(screen.getByTestId('select-box'), {
      target: {
        value: 'brother',
      },
    });

    expect(findPersonByRelation).toHaveBeenCalledWith(person, 'brother');
  });
});
