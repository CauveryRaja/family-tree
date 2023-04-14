import { computeChildrenTotalWidth } from '../../../utils/familyHelpers';
import { Container, ConnectingLine } from './Children.style';
import FamilyEntry from '../FamilyEntry';

const Children = ({ nodes }) => {
    return <Container data-testid="children" width={computeChildrenTotalWidth(nodes)}>
                <ConnectingLine data-testid="connector" hasSingleChild={nodes.length === 1}/>
                {
                    nodes.map(child => (
                        <FamilyEntry key={child.id} person={child} isNested/>
                    ))
                }
    </Container>
}

export default Children