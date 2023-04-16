import { computeChildrenTotalWidth, findPersonByRelation } from './familyHelpers';
import { makePerson } from '../models/Person';
import { dictionary, fetchFamilyTree } from '../api/familyTree';

describe('Family helpers', () => {
  describe('computeChildrenTotalWidth', () => {
    it('should not return any width for empty children', () => {
      const result = computeChildrenTotalWidth([]);

      expect(result).toBe(0);
    });

    it('should return smaller width for children without spouse', () => {
      const children = [makePerson('raja', 25, 'female'), makePerson('priya', 25, 'female')];

      const result = computeChildrenTotalWidth(children);

      expect(result).toBe(210);
    });

    it('should return larger width for children with spouse', () => {
      const spouse = makePerson('andy', 25, 'male');
      const children = [
        makePerson('raja', 25, 'female'),
        makePerson('priya', 25, 'female', spouse),
      ];

      const result = computeChildrenTotalWidth(children);

      expect(result).toBe(320);
    });
  });

  describe('findPersonByRelation', () => {
    beforeAll(() => fetchFamilyTree());

    it('should return grandfather', () => {
      let grandfather = findPersonByRelation(dictionary['drita'], 'grandfather');

      expect(grandfather.name).toBe('Shan');
    });

    it('should return grandmother', () => {
      let grandfather = findPersonByRelation(dictionary['drita'], 'grandmother');

      expect(grandfather.name).toBe('Anga');
    });

    it('should return brother', () => {
      let brother = findPersonByRelation(dictionary['drita'], 'brother')[0];

      expect(brother.name).toBe('Vrita');
    });

    it('should return sister', () => {
      let sisters = findPersonByRelation(dictionary['chit'], 'sister');

      expect(sisters[0].name).toBe('Satya');
      expect(sisters[1].name).toBe('Avi');
    });

    it('should return uncle', () => {
      let uncle = findPersonByRelation(dictionary['drita'], 'uncle')[0];

      expect(uncle.name).toBe('Ish');
    });

    it('should return aunt', () => {
      let aunts = findPersonByRelation(dictionary['drita'], 'aunt');

      expect(aunts[0].name).toBe('Satya');
      expect(aunts[1].name).toBe('Avi');
    });

    it('should return father-in-law', () => {
      let fatherInLaw = findPersonByRelation(dictionary['ambi'], 'fatherinlaw');

      expect(fatherInLaw.name).toBe('Shan');
    });

    it('should return mother-in-law', () => {
      let motherInLaw = findPersonByRelation(dictionary['ambi'], 'motherinlaw');

      expect(motherInLaw.name).toBe('Anga');
    });

    it('should return brother-in-law', () => {
      let brotherInLaw = findPersonByRelation(dictionary['ambi'], 'brotherinlaw')[0];

      expect(brotherInLaw.name).toBe('Ish');
    });

    it('should return sister-in-law', () => {
      let sisterInLaw = findPersonByRelation(dictionary['ambi'], 'sisterinlaw');

      expect(sisterInLaw[0].name).toBe('Satya');
      expect(sisterInLaw[1].name).toBe('Avi');
    });

    it.each`
      relation
      ${'grandfather'}
      ${'grandmother'}
      ${'brother'}
      ${'sister'}
      ${'uncle'}
      ${'aunt'}
    `('should not return anything for $relation if parents are not available', ({ relation }) => {
      expect(findPersonByRelation(makePerson('ram', 22, 'male'), relation)).toBeUndefined();
    });

    it.each`
      relation
      ${'fatherinlaw'}
      ${'motherinlaw'}
      ${'brotherinlaw'}
      ${'sisterinlaw'}
    `('should not return anything for $relation if spouse is not available', ({ relation }) => {
      expect(findPersonByRelation(makePerson('ram', 22, 'male'), relation)).toBeUndefined();
    });
  });
});
