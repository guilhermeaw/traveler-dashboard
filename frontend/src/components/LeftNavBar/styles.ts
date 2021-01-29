import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 96px;
  padding: 24px 0;
  background-color: ${props => props.theme.colors.orange};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 22px;
    height: 48px;
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: transparent;
  }
`;
