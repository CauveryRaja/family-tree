import styled from 'styled-components';
import { COLOR } from '../../utils/uiConstants';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  padding: 20px;
`;

export const Greeting = styled.p`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 24px;
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Message = styled.p`
  font-size: 18px;
`;

export const Legend = styled.div`
  display: flex;
  gap: 20px;
`;

export const LegendRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Indicator = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ gender }) => (gender === 'male' ? COLOR.LIGHTBLUE : COLOR.PINK)};
  border-radius: 50%;
`;
