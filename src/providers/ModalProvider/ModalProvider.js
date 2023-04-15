import ModalContext from './ModalContext';
import { useState } from 'react';

const ModalProvider = ({ children }) => {
  const [isVisible, toggleVisibility] = useState(false);

  return (
    <ModalContext.Provider value={{ modalVisible: isVisible, toggleVisibility }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
