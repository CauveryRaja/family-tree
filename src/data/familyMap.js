import { makePerson } from '../models/Person';

const familyMap = {
  shan: makePerson('Shan', 83, 'male'),
  anga: makePerson('Anga', 79, 'female'),
  chit: makePerson('Chit', 56, 'male'),
  ambi: makePerson('Ambi', 54, 'female'),
  satya: makePerson('Satya', 50, 'female'),
  vyan: makePerson('Vyan', 54, 'male'),
  ish: makePerson('Ish', 47, 'male'),
  drita: makePerson('Drita', 30, 'male'),
  vrita: makePerson('Vrita', 27, 'male'),
  vika: makePerson('Vika', 24, 'female'),
  avi: makePerson('Avi', 34, 'female'),
};

function addCouple(personA, personB) {
  familyMap[personA].spouse = familyMap[personB];
  familyMap[personB].spouse = familyMap[personA];
}

function addChild(parent, child) {
  let parentA = familyMap[parent],
    parentB = familyMap[parent].spouse;
  if (parentA.children && parentB.children) {
    parentA.children.push(familyMap[child]);
  } else {
    parentA.children = parentB.children = [familyMap[child]];
  }

  familyMap[child].parents = [parentA, parentB];
}

// Level 0
addCouple('shan', 'anga');
addChild('shan', 'chit');
addChild('shan', 'ish');
addChild('shan', 'satya');
addChild('shan', 'avi');

// Level 1
addCouple('chit', 'ambi');
addChild('chit', 'drita');
addChild('chit', 'vrita');

addCouple('satya', 'vyan');
addChild('satya', 'vika');

export default familyMap;
