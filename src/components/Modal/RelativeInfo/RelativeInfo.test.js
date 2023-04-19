import { fireEvent, render, screen } from '@testing-library/react';
import RelativeInfo from './RelativeInfo';
import { makePerson } from '../../../models/Person';

const parentMockData = [
  makePerson('Shan', 60, 'male', makePerson('Anga', 54, 'female'), [
    makePerson('Max', 22, 'male'),
    makePerson('John', 30, 'male', makePerson('Avi', 28, 'male')),
  ]),
];

const spouseMockData = makePerson(
  'John',
  30,
  'male',
  makePerson('Avi', 28, 'male'),
  null,
  parentMockData,
);

describe('RelativeInfo', () => {
  it('should render select box with no relative', () => {
    render(<RelativeInfo person={makePerson('max', 22, 'male')} />);

    expect(screen.getByText('Select relation to identify person')).toBeInTheDocument();
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText('None')).toBeInTheDocument();
  });

  it('should render correct sibling', () => {
    const person = makePerson('Max', 22, 'male', null, null, parentMockData);
    render(<RelativeInfo person={person} />);

    fireEvent.change(screen.getByRole('menu'), {
      target: {
        value: 'brother',
      },
    });

    expect(screen.getByText('John')).toBeInTheDocument();
  });

  it('should fetch correct father-in-law', () => {
    const person = makePerson('Avi', 22, 'female', spouseMockData);
    render(<RelativeInfo person={person} />);

    fireEvent.change(screen.getByRole('menu'), {
      target: {
        value: 'fatherinlaw',
      },
    });

    expect(screen.getByText('Shan')).toBeInTheDocument();
  });
});
