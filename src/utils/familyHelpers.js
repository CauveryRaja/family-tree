import { NODE_WIDTH, PAIR_WIDTH, NODE_GAP } from './uiconstants';

export const computeChildrenTotalWidth = (children) => {
  let sum = 0;

  children.forEach((person, index) => {
    sum += person.spouse ? PAIR_WIDTH : NODE_WIDTH;

    if (index !== children.length - 1) sum += NODE_GAP;
  });

  return sum;
};
