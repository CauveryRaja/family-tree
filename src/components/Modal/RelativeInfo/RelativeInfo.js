import { useState } from 'react';
import { RELATIONS } from '../../../utils/familyConstants';
import { Arrow, Container, Row } from './Relative.styles';
import { useEffect } from 'react';
import { findPersonByRelation } from '../../../utils/familyHelpers';
import { PersonChip } from '../FamilyInfo/FamilyInfo.style';

const RelativeInfo = ({ person }) => {
  const [selectedRelation, setRelation] = useState();
  const [selectedPerson, setPerson] = useState();

  const changeListener = (event) => {
    setRelation(event.target.value);
  };

  useEffect(() => {
    setPerson(findPersonByRelation(person, selectedRelation));
  }, [selectedRelation]);

  return (
    <Container>
      Select relation to identify person
      <Row>
        <select value={selectedRelation} onChange={changeListener}>
          <option>Select</option>
          {RELATIONS.map((relation) => (
            <option value={relation.name}>{relation.displayName}</option>
          ))}
        </select>
        <Arrow>&#8594;</Arrow>
        {selectedPerson ? (
          <PersonChip gender={selectedPerson.gender}>{selectedPerson.name}</PersonChip>
        ) : (
          'None'
        )}
      </Row>
    </Container>
  );
};

export default RelativeInfo;
