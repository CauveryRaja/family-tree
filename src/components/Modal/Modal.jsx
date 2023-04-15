import { useContext } from "react";
import { Container, Backdrop, Header, Content, EmptyContent } from "./Modal.styles";
import FamilyContext from "../../providers/FamilyProvider/FamilyContext";

const Modal = ({ visible, setVisible }) => {
    const { activeMember } = useContext(FamilyContext);

     return <div>
        <Container visible={visible}>
            <Header visible={visible}>Member Details</Header>
            {
                activeMember ? <Content>
                    { activeMember.name }
                </Content>
                : <EmptyContent>
                Please select a member to view their details
            </EmptyContent>
            }
        </Container>
        <Backdrop visible={visible} onClick={() => setVisible(false)}/>
    </div>
}

export default Modal;