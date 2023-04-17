import FamilyEntry from "./FamilyEntry"
import { Container, Greeting, InfoSection, Legend, LegendRow, Message, Indicator } from "./FamilyTree.style"

const FamilyTree = ({ root }) => {
    return <Container data-testid="tree-container">
        <Greeting>
            <span>Take a look at {root.name}'s family tree</span>
        </Greeting>
        <FamilyEntry person={root} />
        <InfoSection>
            <Message><strong>&#9432;</strong> Select a person to view their details</Message>
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
        </InfoSection>
    </Container>
}

export default FamilyTree