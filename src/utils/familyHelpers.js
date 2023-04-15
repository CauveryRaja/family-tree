import { NODE_WIDTH, PAIR_WIDTH, NODE_GAP } from './uiConstants';

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

const getPersonsByGender = (people, gender) => {
  return people?.filter((person) => person.gender === gender);
};
