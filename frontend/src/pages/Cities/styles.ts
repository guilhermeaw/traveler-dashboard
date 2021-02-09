import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const ContentPane = styled.main`
  width: 100%;

  header {
    width: 100%;
    height: 96px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.shapeLighter};
    border-bottom: 1px solid #dce2e5;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderWrapper = styled.div`
  width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.green};
    padding: 11px 32px;

    span {
      font-size: 16px;
      color: ${props => props.theme.colors.shapeLighter};
    }
  }
`;

export const CitiesList = styled.div`
  width: 1120px;
  margin: 48px auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
`;
