import Children from '../Children';
import { Container, Pair, Person, Spouse } from './FamilyEntry.style';

const FamilyEntry = ({ person, isNested = false }) => {
    return <Container>
        {
           person.spouse ? (
            <Pair>
                <Person data={person} isNested={isNested}/>
                <Spouse data={person.spouse} />
            </Pair>
           ) :
           <Person data={person} isNested={isNested}/>
        }
        {
            person.children && (
                <Children nodes={person.children}/>
            )
        }
    </Container>
}

export default FamilyEntry