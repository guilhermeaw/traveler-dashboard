import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  border-radius: 16px;
  width: 256px;
  height: 266px;
  position: relative;
  border: 1px solid #DCE2E5;
  background-color: ${props => props.theme.colors.shapeLighter};
  cursor: pointer;

  img {
    width: 100%;
    height: 180px;
    border-radius: 16px 16px 0 0;
  }

  footer {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    padding: 24px;
  }
`;

export const ActionButtonsWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;

  button {
    background-color: ${props => props.theme.colors.shapeLighter};
    padding: 5px;
    border-radius: 0px 10px 10px 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:first-child {
      margin-right: 4px;
      border-radius: 10px 0px 0px 10px;
    }
  }
`;
