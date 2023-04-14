import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

export const Indicator = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ gender }) => (gender === 'male' ? 'lightblue' : 'pink')};
  border-radius: 50%;
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 7px 0 15px;
`;
