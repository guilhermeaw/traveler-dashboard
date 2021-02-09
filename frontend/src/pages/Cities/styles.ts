import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const RightWrapper = styled.div`
  width: 100%;
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
