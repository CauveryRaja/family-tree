import styled from 'styled-components';
import { COLOR } from '../../../utils/uiConstants';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: ${({ width }) => `${width}px`};
  padding: 20px 0;
  position: relative;
`;

export const ConnectingLine = styled.div`
  width: ${({ hasSingleChild }) => (hasSingleChild ? '0px' : 'calc(100% - 100px)')};
  height: 3px;
  background-color: ${COLOR.BLACK};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: '';
    display: block;
    width: 3px;
    height: 68px;
    background-color: ${COLOR.BLACK};
    position: absolute;
    bottom: 0;
    left: 50%;
  }
`;
