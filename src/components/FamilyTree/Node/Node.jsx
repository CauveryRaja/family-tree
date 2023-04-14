import { Wrapper, Indicator, Label } from "./Node.style";

const Node = ({ className, data }) => {
    return <Wrapper data-testid={data.name + '-node'} className={className}>
        <Indicator data-testid="indicator" gender={data.gender}/>
        <Label data-testid="name">{data.name}</Label>
    </Wrapper>
}

export default Node;