import styled from 'styled-components';
import Node from '../Node';
import { PAIR_WIDTH, NODE_GAP, COLOR } from '../../../utils/uiConstants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Pair = styled.div`
  width: ${PAIR_WIDTH}px;
  display: flex;
  gap: ${NODE_GAP}px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${COLOR.BLACK};
    z-index: -1;
  }
`;

export const Person = styled(Node)`
  position: relative;

  &::before {
    content: '';
    display: block;
    width: ${({ isNested }) => (isNested ? '3px' : '0')};
    height: 20px;
    background-color: ${COLOR.BLACK};
    position: absolute;
    top: -20px;
    left: 50%;
  }
`;

export const Spouse = styled(Node)``;
