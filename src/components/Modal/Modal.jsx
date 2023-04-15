import { useContext } from "react";
import { Container, Backdrop, Header, EmptyContent } from "./Modal.styles";
import FamilyContext from "../../providers/FamilyProvider/FamilyContext";
import Content from "./Content";

const Modal = ({ visible, setVisible }) => {
    const { activeMember } = useContext(FamilyContext);

     return <div>
        <Container visible={visible}>
            <Header visible={visible}>Member Details</Header>
            {
                activeMember ? <Content person={activeMember}/>
                : <EmptyContent>
                Please select a member to view their details
            </EmptyContent>
            }
        </Container>
        <Backdrop visible={visible} onClick={() => setVisible(false)}/>
    </div>
}

export default Modal;