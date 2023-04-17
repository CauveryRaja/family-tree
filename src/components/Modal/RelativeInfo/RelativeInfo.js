import { useState } from 'react';
import { RELATIONS } from '../../../utils/familyConstants';
import { Arrow, Container, Row } from './Relative.styles';
import { useEffect } from 'react';
import { findPersonByRelation } from '../../../utils/familyHelpers';
import { PersonChip } from '../FamilyInfo/FamilyInfo.style';

const RelativeInfo = ({ person }) => {
  const [selectedRelation, setRelation] = useState();
  const [selectedPersons, setPersons] = useState([]);

  const changeListener = (event) => {
    setRelation(event.target.value);
  };

  useEffect(() => {
    let relatedPersons = findPersonByRelation(person, selectedRelation) || [];
    setPersons(relatedPersons instanceof Array ? relatedPersons : [relatedPersons]);
  }, [selectedRelation]);

  return (
    <Container>
      Select relation to identify person
      <Row>
        <select data-testid="select-box" value={selectedRelation} onChange={changeListener}>
          <option>-- Select --</option>
          {RELATIONS.map((relation) => (
            <option key={relation.name} value={relation.name}>
              {relation.displayName}
            </option>
          ))}
        </select>
        <Arrow>&#8594;</Arrow>

        <span data-testid="relative">
          {selectedPersons && selectedPersons.length
            ? selectedPersons.map((person) => (
                <PersonChip key={person.id} gender={person.gender}>
                  {person.name}
                </PersonChip>
              ))
            : 'None'}
        </span>
      </Row>
    </Container>
  );
};

export default RelativeInfo;
