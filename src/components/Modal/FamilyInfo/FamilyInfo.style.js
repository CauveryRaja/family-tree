import styled from 'styled-components';
import { COLOR } from '../../../utils/uiconstants';

export const PersonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`;

export const Label = styled.label`
  color: ${COLOR.GREY1};
  width: 80px;
`;

export const PersonChip = styled.div`
  display: inline-block;
  padding: 5px 15px;
  background-color: ${({ gender }) => (gender === 'male' ? COLOR.LIGHTBLUE : COLOR.PINK)};
  border-radius: 25px;
  margin: 0 5px;
`;
