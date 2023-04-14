import FamilyEntry from "./FamilyEntry"
import { Container } from "./FamilyTree.style"

const FamilyTree = ({ root }) => {
    return <Container>
        <FamilyEntry person={root} />
    </Container>
}

export default FamilyTree