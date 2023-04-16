import { Label, PersonRow, PersonChip } from "./FamilyInfo.style";

const FamilyInfo = ({ person }) => {
    return <>
    { person.spouse && <PersonRow data-testid="spouse">
            <Label>Spouse:</Label>
            <PersonChip gender={person.spouse.gender}>
                {person.spouse.name}
            </PersonChip>
        </PersonRow>
        }
        {
            person.children && <PersonRow data-testid="children">
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
            person.parents && <PersonRow data-testid="parents">
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