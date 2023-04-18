import { render, screen } from '@testing-library/react';
import Content from './Content';
import { makePerson } from '../../../models/Person';

describe('Member Content', () => {
  it('should render correct member details', () => {
    render(<Content person={makePerson('max', 25, 'male')} />);

    expect(screen.getByText('max')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Man')).toBeInTheDocument();
  });
});
