import styled from 'styled-components';
import { COLOR } from '../../../utils/uiConstants';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NameRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const Icon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: ${({ gender }) => (gender === 'male' ? COLOR.LIGHTBLUE : COLOR.PINK)};
`;

export const Name = styled.h3``;

export const AgeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const Label = styled.label`
  color: ${COLOR.GREY1};
  margin-right: 10px;
`;

export const Gender = styled.span`
  text-transform: capitalize;
`;
