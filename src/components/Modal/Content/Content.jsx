import { Container, Icon, Name, NameRow, AgeRow, Label, Gender, GenderIcon } from "./Content.style"
import FamilyInfo from "../FamilyInfo";
import RelativeInfo from "../RelativeInfo";

const Content = ({ person }) => {
    return <Container data-testid="member-details">
        <NameRow>
            <Icon gender={person.gender}>{person.name.charAt(0)}</Icon>
            <Name data-testid="name">{person.name}</Name>
        </NameRow>
        <AgeRow>
            <div>
                <Label>Age:</Label>
                <span data-testid="age">{person.age}</span>
            </div>
            <div>
                <Label>Gender:</Label>
                <Gender data-testid="gender"> 
                    <GenderIcon gender={person.gender}>{
                        person.gender === 'male' ? <>&#9794;</> : <>&#9792;</>
                    }
                    </GenderIcon> {person.gender === 'male' ? 'Man' : 'Woman'}</Gender>
            </div>
        </AgeRow>
        <FamilyInfo person={person} />
        <RelativeInfo person={person} />
    </Container>
}

export default Content;