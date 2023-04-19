import styled, { keyframes } from 'styled-components';
import { COLOR, TRANSITION_DURATION } from '../../utils/uiconstants';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.WHITE};
  height: 70px;
`;

export const Title = styled.h1`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
`;

export const BurgerButton = styled.button`
  position: absolute;
  right: 20px;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 9999;
`;

export const Bar = styled.div`
  width: 35px;
  height: 3px;
  background-color: ${COLOR.WHITE};
  animation-duration: ${TRANSITION_DURATION};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

export const Bar1 = styled(Bar)`
  animation-name: ${({ visible }) => (visible ? openBar1 : closeBar1)};
`;

export const Bar2 = styled(Bar)`
  animation-name: ${({ visible }) => (visible ? openBar2 : closeBar2)};
`;

export const Bar3 = styled(Bar)`
  animation-name: ${({ visible }) => (visible ? openBar3 : closeBar3)};
`;

const openBar1 = keyframes`
  0% {
      transform: translateY(0px);
  }
  50% {
      transform: translateY(8px);
  }
  100% {
      transform: translateY(8px) rotate(45deg);
  }
`;

const closeBar1 = keyframes`
  0% {
      transform: translateY(8px) rotate(45deg);
  }
  50% {
      transform: translateY(8px);
  }
  100% {
      transform: translateY(0px);
  }
`;

const openBar2 = keyframes`
  0% {
        opacity: 1;
    }
  100% {
      opacity: 0;
  }
`;

const closeBar2 = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;

const openBar3 = keyframes`
  0% {
      transform: translateY(0px);
  }
  50% {
      transform: translateY(-8px);
  }
  100% {
      transform: translateY(-8px) rotate(135deg);
  }
`;

const closeBar3 = keyframes`
  0% {
      transform: translateY(-8px) rotate(135deg);
  }
  50% {
      transform: translateY(-8px);
  }
  100% {
      transform: translateY(0px);
  }
`;
