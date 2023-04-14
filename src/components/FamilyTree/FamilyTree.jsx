import FamilyEntry from "./FamilyEntry"
import { Container } from "./FamilyTree.style"

const FamilyTree = ({ root }) => {
    return <Container>
        <FamilyEntry data={root} />
    </Container>
}

export default FamilyTree