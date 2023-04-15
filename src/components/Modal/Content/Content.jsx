import { Container, Icon, Name, NameRow, AgeRow, Label, Gender } from "./Content.style"
import FamilyInfo from "../FamilyInfo";
import RelativeInfo from "../RelativeInfo";

const Content = ({ person }) => {
    return <Container>
        <NameRow>
            <Icon gender={person.gender}>{person.name.charAt(0)}</Icon>
            <Name>{person.name}</Name>
        </NameRow>
        <AgeRow>
            <div>
                <Label>Age:</Label>
                <span>{person.age}</span>
            </div>
            <div>
                <Label>Gender:</Label>
                <Gender>{person.gender === 'male' ? <>&#9794;</>: <>&#9792;</>} {person.gender}</Gender>
            </div>
        </AgeRow>
        <FamilyInfo person={person} />
        <RelativeInfo person={person} />
    </Container>
}

export default Content;