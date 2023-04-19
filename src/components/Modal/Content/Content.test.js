import { render, screen } from '@testing-library/react';
import Content from './Content';
import { makePerson } from '../../../models/Person';

describe('Member Content', () => {
  it('should render correct details for a male person', () => {
    render(<Content person={makePerson('max', 25, 'male')} />);

    expect(screen.getByText('max')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Man')).toBeInTheDocument();
  });

  it('should render correct details for a female person', () => {
    render(<Content person={makePerson('avi', 33, 'female')} />);

    expect(screen.getByText('avi')).toBeInTheDocument();
    expect(screen.getByText('33')).toBeInTheDocument();
    expect(screen.getByText('Woman')).toBeInTheDocument();
  });
});
