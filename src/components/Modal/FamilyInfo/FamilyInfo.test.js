import { render, screen } from '@testing-library/react';
import FamilyInfo from './FamilyInfo';
import { makePerson } from '../../../models/Person';

describe('FamilyInfo', () => {
  it('should render empty Info', () => {
    render(<FamilyInfo person={makePerson('ram', 22, 'male')} />);

    expect(screen.queryByTestId('spouse')).toBeNull();
    expect(screen.queryByTestId('children')).toBeNull();
    expect(screen.queryByTestId('parents')).toBeNull();
  });

  it('should render spouse if available', () => {
    render(
      <FamilyInfo person={makePerson('ram', 22, 'male', makePerson('priya', 21, 'female'))} />,
    );

    expect(screen.getByTestId('spouse')).toBeDefined();
    expect(screen.queryByTestId('children')).toBeNull();
    expect(screen.queryByTestId('parents')).toBeNull();
  });

  it('should render children if available', () => {
    let children = [makePerson('priya', 21, 'female'), makePerson('ram', 21, 'male')];
    render(<FamilyInfo person={makePerson('john', 22, 'male', null, children)} />);

    expect(screen.getByTestId('children')).toBeDefined();
    expect(screen.queryByTestId('spouse')).toBeNull();
    expect(screen.queryByTestId('parents')).toBeNull();
  });

  it('should render parents if available', () => {
    let parents = [makePerson('priya', 21, 'female'), makePerson('ram', 21, 'male')];
    render(<FamilyInfo person={makePerson('john', 22, 'male', null, null, parents)} />);

    expect(screen.getByTestId('parents')).toBeDefined();
    expect(screen.queryByTestId('spouse')).toBeNull();
    expect(screen.queryByTestId('children')).toBeNull();
  });
});
