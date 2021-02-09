import React from 'react';
import { FiArrowLeft, FiEdit3, FiTrash } from 'react-icons/fi';

import Header from '../../components/Header';
import AddButton from '../../components/AddButton';
import LeftNavBar from '../../components/LeftNavBar';

import {
  Container,
  ContentPane,
  ActionButton,
  HeaderRightWrapper,
  ActionButtonsContainer
} from './styles';

const City: React.FC = () => {
  return (
    <Container>
      <LeftNavBar />

      <ContentPane>
        <Header>
          <ActionButton type="button">
            <FiArrowLeft />
          </ActionButton>

          <HeaderRightWrapper>
            <ActionButtonsContainer>
              <ActionButton type="button">
                <FiEdit3 />
              </ActionButton>
              <ActionButton type="button">
                <FiTrash />
              </ActionButton>
            </ActionButtonsContainer>

            <AddButton text="Adicionar um local" />
          </HeaderRightWrapper>
        </Header>
      </ContentPane>
    </Container>
  );
}

export default City;
