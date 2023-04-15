import { useContext } from "react";
import { Wrapper, Indicator, Label } from "./Node.style";
import FamilyContext from "../../../providers/FamilyProvider/FamilyContext";

const Node = ({ className, data }) => {
    const { setActiveMember } = useContext(FamilyContext);

    return <Wrapper data-testid={data.name + '-node'} className={className}>
        <Indicator data-testid="indicator" gender={data.gender} onClick={() => setActiveMember(data)}/>
        <Label data-testid="name">{data.name}</Label>
    </Wrapper>
}

export default Node;