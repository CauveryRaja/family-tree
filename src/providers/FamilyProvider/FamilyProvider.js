import FamilyContext from './FamilyContext';
import { useState } from 'react';
import defaultMap from '../../data/familyMap';
import { useEffect } from 'react';
import { useContext } from 'react';
import ModalContext from '../ModalProvider/ModalContext';

const FamilyProvider = ({ children }) => {
  const [familyMap, setFamilyMap] = useState(defaultMap);
  const [activeMember, setActiveMember] = useState();
  const { modalVisible, toggleVisibility } = useContext(ModalContext);

  useEffect(() => {
    if (activeMember) {
      toggleVisibility(true);
    }
  }, [activeMember]);

  useEffect(() => {
    if (!modalVisible) {
      setActiveMember(undefined);
    }
  }, [modalVisible]);

  return (
    <FamilyContext.Provider
      value={{ familyTree: familyMap['shan'], activeMember, setActiveMember }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyProvider;
