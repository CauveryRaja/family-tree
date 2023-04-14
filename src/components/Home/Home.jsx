import FamilyTree from "../FamilyTree"
import { useContext } from "react";
import { Container } from "./Home.style";
import FamilyContext from "../../providers/FamilyProvider/FamilyContext";

const Home = () => {
    const { familyTree } = useContext(FamilyContext);

    return <Container>
        <FamilyTree root={familyTree} />
    </Container>
}

export default Home