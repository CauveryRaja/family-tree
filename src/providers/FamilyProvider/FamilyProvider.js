import FamilyContext from './FamilyContext';
import { useState } from 'react';
import defaultMap from '../../data/familyMap';

const FamilyProvider = ({ children }) => {
  const [familyMap, setFamilyMap] = useState(defaultMap);

  return (
    <FamilyContext.Provider value={{ familyTree: familyMap['shan'] }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyProvider;
