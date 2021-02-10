import styled from 'styled-components';

interface ImageBanner {
  backgroundImage: string;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const RightWrapper = styled.div`
  width: 100%;
`;

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.shapeLight};
  border-radius: 10px;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionButtonsContainer = styled.div`
  margin-right: 24px;

  display: flex;
`;

export const CityImageBanner = styled.div<ImageBanner>`
  width: 100%;
  height: 340px;

  background: url(${props => props.backgroundImage}) no-repeat center;
  background-size: cover;
`;

export const CityResumeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 80px;
`;

export const CityInfoWrapper = styled.div`
  width: 50%;

  h1 {
    font-size: 54px;
  }

  strong {
    display: block;
    margin-top: 40px;
    font-family: 'Heebo';
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }

  p {
    margin-top: 32px;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const CityInfoCardsWrapper = styled.div`
  display: flex;
`;

export const CityInfoCard = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.shapeLighter};
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.shapeLight};

  header {
    padding: 32px;
  }

  div {
    padding: 32px;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.shapeLight};

    span {
      width: 90px;
      margin-top: 16px;
      display: block;
    }
  }

  & + & {
    margin-left: 16px;
  }
`;
