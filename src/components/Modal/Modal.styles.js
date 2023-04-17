import styled from 'styled-components';
import { COLOR, TRANSITION_DURATION } from '../../utils/uiConstants';

export const Container = styled.div`
  width: 400px;
  height: 100%;
  position: fixed;
  background-color: white;
  z-index: 2;
  top: 0;
  right: -400px;
  overflow-y: auto;
  transform: ${({ visible }) => (visible ? 'translateX(-100%)' : 'translateX(0)')};
  transition: transform ${TRANSITION_DURATION};
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.WHITE};
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const EmptyContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  font-size: 18px;
  text-align: center;

  strong {
    font-size: 36px;
  }
`;

export const Backdrop = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.TRANSPARENTBLACK};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity ${TRANSITION_DURATION};
`;
