import { Container, Pair, Person, Spouse, Children, NODE_WIDTH, PAIR_WIDTH, NODE_GAP, Line } from './FamilyEntry.style';

const FamilyEntry = ({ data, isNested = false }) => {
    const computeChildrenTotalWidth = () => {
        let sum = 0;

        data.children.forEach((person, index) => {
            sum += person.spouse ? PAIR_WIDTH : NODE_WIDTH;

            if(index !== data.children.length - 1)
                sum += NODE_GAP;
        })

        return sum;
    }
    return <Container>
        {
           data.spouse ? (
            <Pair>
                <Person data={data} isNested={isNested}/>
                <Spouse data={data.spouse} />
            </Pair>
           ) :
           <Person data={data} isNested={isNested}/>
        }
        {
            data.children && (
                <Children width={computeChildrenTotalWidth()}>
                    <Line hasSingleChild={data.children.length === 1}/>
                    {
                        data.children.map(child => (
                            <FamilyEntry data={child} isNested/>
                        ))
                    }
                </Children>
            )
        }
    </Container>
}

export default FamilyEntry