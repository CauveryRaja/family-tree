import { useContext } from "react";
import { Container, Backdrop, Header, EmptyContent } from "./Modal.styles";
import FamilyContext from "../../providers/FamilyProvider/FamilyContext";
import Content from "./Content";

const Modal = ({ visible, setVisible }) => {
    const { activeMember } = useContext(FamilyContext);

     return <>
        <Container visible={visible}>
            <Header data-testid="header" visible={visible}>Member Details</Header>
            {
                activeMember ? <Content data-testid="member-details" person={activeMember}/>
                : <EmptyContent data-testid="empty-content">
                <strong>&#9432;</strong> Please select a member to view their details
            </EmptyContent>
            }
        </Container>
        <Backdrop visible={visible} onClick={() => setVisible(false)}/>
    </>
}

export default Modal;