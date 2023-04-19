import styled from 'styled-components';
import { COLOR } from '../../../utils/uiconstants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  border-top: 1px solid ${COLOR.GREY2};
  border-bottom: 1px solid ${COLOR.GREY2};

  select {
    padding: 5px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Arrow = styled.span`
  font-size: 25px;
`;
