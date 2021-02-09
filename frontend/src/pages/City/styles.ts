import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const ContentPane = styled.main`
  width: 100%;
`;

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.shapeLight};
  border-radius: 10px;
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionButtonsContainer = styled.div`
  margin-right: 24px;
`;
