import FamilyContext from './FamilyContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ModalContext from '../ModalProvider/ModalContext';
import { fetchFamilyTree } from '../../api/familyTree';

const DEFAULT_TREE = fetchFamilyTree();

const FamilyProvider = ({ children }) => {
  const [familyTree, setFamilyTree] = useState(DEFAULT_TREE);
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
    <FamilyContext.Provider value={{ familyTree: familyTree.root, activeMember, setActiveMember }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyProvider;
