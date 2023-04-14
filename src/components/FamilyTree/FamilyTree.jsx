import FamilyEntry from "./FamilyEntry"
import { Container } from "./FamilyTree.style"

const FamilyTree = ({ root }) => {
    return <Container data-testid="tree-container">
        <FamilyEntry person={root} />
    </Container>
}

export default FamilyTree