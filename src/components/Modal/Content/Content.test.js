import { render, screen } from '@testing-library/react';
import Content from './Content';
import { makePerson } from '../../../models/Person';

describe('Member Content', () => {
  it('should render correct member details', () => {
    render(<Content person={makePerson('max', 25, 'male')} />);

    expect(screen.getByTestId('name')).toHaveTextContent('max');
    expect(screen.getByTestId('age')).toHaveTextContent('25');
    expect(screen.getByTestId('gender')).toHaveTextContent('Man');
  });
});
