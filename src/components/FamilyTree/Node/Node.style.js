import styled from 'styled-components';
import { NODE_WIDTH, COLOR } from '../../../utils/uiconstants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${NODE_WIDTH}px;
`;

export const Indicator = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ gender }) => (gender === 'male' ? COLOR.LIGHTBLUE : COLOR.PINK)};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
  }
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 7px 0 15px;
`;
