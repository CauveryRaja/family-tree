import { computeChildrenTotalWidth } from './familyHelpers';
import { makePerson } from '../models/Person';

describe('Family helpers', () => {
  describe('computeChildrenTotalWidth method', () => {
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
});
