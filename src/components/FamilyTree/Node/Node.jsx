import { Wrapper, Indicator, Label } from "./Node.style";

const Node = ({ className, data }) => {
    return <Wrapper className={className}>
        <Indicator gender={data.gender}/>
        <Label>{data.name}</Label>
    </Wrapper>
}

export default Node;