import { useContext } from "react";
import { Container, Title, BurgerButton, Bar1, Bar2, Bar3 } from "./Header.styles";
import ModalContext from "../../providers/ModalProvider/ModalContext";


const Header = () => {
    const { modalVisible, toggleVisibility } = useContext(ModalContext);

    return <Container>
        <Title>Family Tree</Title>
        <BurgerButton onClick={() => toggleVisibility(!modalVisible)}>
            <Bar1 visible={modalVisible}/>
            <Bar2 visible={modalVisible}/>
            <Bar3 visible={modalVisible}/>
        </BurgerButton>
    </Container>
};

export default Header;