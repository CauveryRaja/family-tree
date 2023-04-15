import { Label, PersonRow, PersonChip } from "./FamilyInfo.style";

const FamilyInfo = ({ person }) => {
    return <>
    { person.spouse && <PersonRow>
            <Label>Spouse:</Label>
            <PersonChip gender={person.spouse.gender}>
                {person.spouse.name}
            </PersonChip>
        </PersonRow>
        }
        {
            person.children && <PersonRow>
            <Label>Children:</Label>
            {
                person?.children.map(child => (
                    <PersonChip key={child.id} gender={child.gender}>
                        {child.name}
                    </PersonChip>
                ))
            }
            </PersonRow>
        }
        {
            person.parents && <PersonRow>
            <Label>Parents:</Label>
            {
                person?.parents.map(parent => (
                    <PersonChip key={parent.id} gender={parent.gender}>
                        {parent.name}
                    </PersonChip>
                ))
            }
            </PersonRow>
        }
    </>
}

export default FamilyInfo;