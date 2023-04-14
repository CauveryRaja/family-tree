import { computeChildrenTotalWidth } from '../../../utils/familyHelpers';
import { Container, ConnectingLine } from './Children.style';
import FamilyEntry from '../FamilyEntry';

const Children = ({ nodes }) => {

    return <Container width={computeChildrenTotalWidth(nodes)}>
                <ConnectingLine hasSingleChild={nodes.length === 1}/>
                {
                    nodes.map(child => (
                        <FamilyEntry person={child} isNested/>
                    ))
                }
    </Container>
}

export default Children