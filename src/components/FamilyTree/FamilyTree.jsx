import FamilyEntry from "./FamilyEntry"
import { Container, Legend, LegendRow } from "./FamilyTree.style"
import { Indicator } from "./Node/Node.style"

const FamilyTree = ({ root }) => {
    return <Container data-testid="tree-container">
        <FamilyEntry person={root} />
        <Legend data-testid="legend">
            <LegendRow>
                <Indicator gender="male"/>
                <label>Male</label>
            </LegendRow>
            <LegendRow>
                <Indicator gender="female"/>
                <label>Female</label>
            </LegendRow>
        </Legend>
    </Container>
}

export default FamilyTree