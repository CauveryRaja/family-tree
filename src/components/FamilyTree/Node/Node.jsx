import { useContext } from "react";
import { Wrapper, Indicator, Label } from "./Node.style";
import FamilyContext from "../../../providers/FamilyProvider/FamilyContext";

const Node = ({ className, data }) => {
    const { setActiveMember } = useContext(FamilyContext);

    return <Wrapper data-testid={data.name + '-node'} className={className}>
        <Indicator aria-labelledby="name" data-testid="indicator" gender={data.gender} onClick={() => setActiveMember(data)}/>
        <Label id="name" data-testid="name">{data.name}</Label>
    </Wrapper>
}

export default Node;