import styled from 'styled-components';
import { COLOR } from '../../utils/uiconstants';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.WHITE};
  width: 100%;
  padding: 1em;
`;

export const Copyrights = styled.p`
  text-align: center;
`;
