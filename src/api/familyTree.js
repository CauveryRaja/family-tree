import { makeFamilyTree } from '../models/FamilyTree';
import { makePerson } from '../models/Person';

const dictionary = {
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

export const fetchFamilyTree = () => {
  return constructFamilyTree();
};

const constructFamilyTree = () => {
  const familyTree = makeFamilyTree(dictionary, 'shan');

  // Level 0
  familyTree.setCouple('shan', 'anga');
  familyTree.setChild('shan', 'chit');
  familyTree.setChild('shan', 'ish');
  familyTree.setChild('shan', 'satya');
  familyTree.setChild('shan', 'avi');

  // Level 1
  familyTree.setCouple('chit', 'ambi');
  familyTree.setChild('chit', 'drita');
  familyTree.setChild('chit', 'vrita');

  familyTree.setCouple('satya', 'vyan');

  return familyTree;
};
