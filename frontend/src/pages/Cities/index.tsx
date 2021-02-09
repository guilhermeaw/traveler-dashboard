import React from 'react';

import LeftNavBar from '../../components/LeftNavBar';
import CityCard from '../../components/CityCard';

import { Container, ContentPane, HeaderWrapper, CitiesList } from './styles';

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

        <CitiesList>
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </CitiesList>
      </ContentPane>
    </Container>
  );
}

export default Cities;
