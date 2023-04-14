import styled from 'styled-components';
import Node from '../Node';

export const NODE_GAP = 10;
export const NODE_WIDTH = 100;
export const PAIR_WIDTH = 210;

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
    background-color: black;
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
    background-color: black;
    position: absolute;
    top: -20px;
    left: 50%;
  }
`;

export const Spouse = styled(Node)``;

export const Children = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: ${({ width }) => `${width}px`};
  padding: 20px 0;
  position: relative;
`;

export const Line = styled.div`
  width: ${({ hasSingleChild }) => (hasSingleChild ? '0px' : 'calc(100% - 100px)')};
  height: 3px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: '';
    display: block;
    width: 3px;
    height: 68px;
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 50%;
  }
`;
