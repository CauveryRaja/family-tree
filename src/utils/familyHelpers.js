import { NODE_WIDTH, PAIR_WIDTH, NODE_GAP } from './uiconstants';

export const computeChildrenTotalWidth = (children) => {
  let sum = 0;

  children.forEach((person, index) => {
    sum += person.spouse ? PAIR_WIDTH : NODE_WIDTH;

    if (index !== children.length - 1) sum += NODE_GAP;
  });

  return sum;
};

export const findPersonByRelation = (person, relation) => {
  switch (relation) {
    case 'grandfather':
      return getGrandFather(person);
    case 'grandmother':
      return getGrandMother(person);
    case 'brother':
      return getBrother(person);
    case 'sister':
      return getSister(person);
    case 'uncle':
      return getUncle(person);
    case 'aunt':
      return getAunt(person);
    case 'fatherinlaw':
      return getFatherInLaw(person);
    case 'motherinlaw':
      return getMotherInLaw(person);
    case 'brotherinlaw':
      return getBrotherInLaw(person);
    case 'sisterinlaw':
      return getSisterInLaw(person);
  }
};

const getGrandFather = (person) => {
  if (!person.parents) return;
  let [parentA, parentB] = person.parents;

  if (parentA.parents) {
    return getPersonsByGender(parentA.parents, 'male')[0];
  }
  if (parentB.parents) {
    return getPersonsByGender(parentB.parents, 'male')[0];
  }
};

const getGrandMother = (person) => {
  if (!person.parents) return;
  let [parentA, parentB] = person.parents;

  if (parentA.parents) {
    return getPersonsByGender(parentA.parents, 'female')[0];
  }
  if (parentB.parents) {
    return getPersonsByGender(parentB.parents, 'female')[0];
  }
};

const getBrother = (person) => {
  if (!person.parents) return;

  const siblings = person.parents[0].children.filter((child) => child.id !== person.id);
  return getPersonsByGender(siblings, 'male');
};

const getSister = (person) => {
  if (!person.parents) return;

  const siblings = person.parents[0].children.filter((child) => child.id !== person.id);
  return getPersonsByGender(siblings, 'female');
};

const getUncle = (person) => {
  const parentSiblings = getParentSiblings(person);
  return getPersonsByGender(parentSiblings, 'male');
};

const getAunt = (person) => {
  const parentSiblings = getParentSiblings(person);
  return getPersonsByGender(parentSiblings, 'female');
};

const getParentSiblings = (person) => {
  if (!person.parents) return;
  let [parentA, parentB] = person.parents;

  if (parentA.parents) {
    let grandParent = parentA.parents[0];
    return grandParent.children.filter((child) => child.id !== parentA.id);
  } else if (parentB.parents) {
    let grandParent = parentB.parents[0];
    return grandParent.children.filter((child) => child.id !== parentB.id);
  }
};

const getFatherInLaw = (person) => {
  if (!person.spouse) return;

  let parentInLaws = person.spouse.parents;
  if (parentInLaws) {
    return getPersonsByGender(parentInLaws, 'male')[0];
  }
};

const getMotherInLaw = (person) => {
  if (!person.spouse) return;

  let parentInLaws = person.spouse.parents;
  if (parentInLaws) {
    return getPersonsByGender(parentInLaws, 'female')[0];
  }
};

const getBrotherInLaw = (person) => {
  let fatherInLaw = getFatherInLaw(person);
  if (!fatherInLaw) return;

  let siblingsInLaw = fatherInLaw.children.filter((child) => child.id !== person.spouse.id);
  return getPersonsByGender(siblingsInLaw, 'male');
};

const getSisterInLaw = (person) => {
  let fatherInLaw = getFatherInLaw(person);
  if (!fatherInLaw) return;

  let siblingsInLaw = fatherInLaw.children.filter((child) => child.id !== person.spouse.id);
  return getPersonsByGender(siblingsInLaw, 'female');
};

const getPersonsByGender = (people, gender) => {
  return people?.filter((person) => person.gender === gender);
};
