import React from 'react';

import LeftNavBar from '../../components/LeftNavBar';

import { Container, ContentPane, HeaderWrapper } from './styles';

const Cities: React.FC = () => {
  return (
    <Container>
      <LeftNavBar />

      <ContentPane>
        <header>
          <HeaderWrapper>
            <h1>Cidades</h1>

            <button type="button">
              <span>+ Adicionar um perfil</span>
            </button>
          </HeaderWrapper>
        </header>


      </ContentPane>
    </Container>
  );
}

export default Cities;
