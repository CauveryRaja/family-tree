import { render } from '@testing-library/react';
import Home from './Home';
import FamilyContext from '../../providers/FamilyProvider/FamilyContext';
import { makePerson } from '../../models/Person';

const person = makePerson('john', 25, 'male');

describe('Home', () => {
  it('should render Home', () => {
    render(
      <FamilyContext.Provider value={{ familyTree: person }}>
        <Home />
      </FamilyContext.Provider>,
    );
  });
});
