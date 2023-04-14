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
};

// Level 0
familyMap['shan'].spouse = familyMap['anga'];
familyMap['anga'].spouse = familyMap['shan'];
familyMap['shan'].children = familyMap['anga'].children = [
  familyMap['chit'],
  familyMap['ish'],
  familyMap['satya'],
  familyMap['vika'],
];

// Level 1
familyMap['chit'].spouse = familyMap['ambi'];
familyMap['ambi'].spouse = familyMap['chit'];
familyMap['chit'].children = familyMap['ambi'].children = [familyMap['drita'], familyMap['vrita']];

familyMap['satya'].spouse = familyMap['vyan'];
familyMap['vyan'].spouse = familyMap['satya'];
familyMap['satya'].children = familyMap['vyan'].children = [familyMap['vika']];

// Level 2

export default familyMap;
