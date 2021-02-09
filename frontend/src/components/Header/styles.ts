import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 96px;
  background-color: ${props => props.theme.colors.shapeLighter};
  border-bottom: 1px solid #dce2e5;
  position: fixed;

  display: flex;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1120px;
  padding: 24px 0;
  margin: 0 auto;
`;
