import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.green};
  padding: 11px 32px;

  span {
    font-size: 16px;
    color: ${props => props.theme.colors.shapeLighter};
  }
`;
