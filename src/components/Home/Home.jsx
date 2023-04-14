import FamilyTree from "../FamilyTree"
import familyData from '../../data/familyTree';

const Home = () => {
    return <FamilyTree root={familyData} />
}

export default Home