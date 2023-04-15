import FamilyTree from "../FamilyTree"
import { useContext } from "react";
import { Container } from "./Home.style";
import FamilyContext from "../../providers/FamilyProvider/FamilyContext";
import Modal from "../Modal";
import ModalContext from "../../providers/ModalProvider/ModalContext";

const Home = () => {
    const { familyTree } = useContext(FamilyContext);
    const { modalVisible, toggleVisibility } = useContext(ModalContext);

    return <Container>
        <FamilyTree root={familyTree} />
        <Modal visible={modalVisible} setVisible={toggleVisibility}/>
    </Container>
}

export default Home