import { render, screen } from '@testing-library/react';
import FamilyInfo from './FamilyInfo';
import { makePerson } from '../../../models/Person';

describe('FamilyInfo', () => {
  it('should render empty Info', () => {
    render(<FamilyInfo person={makePerson('ram', 22, 'male')} />);

    expect(screen.queryByText('spouse')).not.toBeInTheDocument();
    expect(screen.queryByText('children')).not.toBeInTheDocument();
    expect(screen.queryByText('parents')).not.toBeInTheDocument();
  });

  it('should render spouse if available', () => {
    render(
      <FamilyInfo person={makePerson('ram', 22, 'male', makePerson('priya', 21, 'female'))} />,
    );

    expect(screen.getByText('Spouse:')).toBeInTheDocument();
    expect(screen.getByText('priya')).toBeInTheDocument();
  });

  it('should render children if available', () => {
    let children = [makePerson('priya', 21, 'female'), makePerson('ram', 21, 'male')];
    render(<FamilyInfo person={makePerson('john', 22, 'male', null, children)} />);

    expect(screen.getByText('Children:')).toBeInTheDocument();
    expect(screen.getByText('priya')).toBeInTheDocument();
    expect(screen.getByText('ram')).toBeInTheDocument();
  });

  it('should render parents if available', () => {
    let parents = [makePerson('priya', 21, 'female'), makePerson('ram', 21, 'male')];
    render(<FamilyInfo person={makePerson('john', 22, 'male', null, null, parents)} />);

    expect(screen.getByText('Parents:')).toBeInTheDocument();
    expect(screen.getByText('priya')).toBeInTheDocument();
    expect(screen.getByText('ram')).toBeInTheDocument();
  });
});
