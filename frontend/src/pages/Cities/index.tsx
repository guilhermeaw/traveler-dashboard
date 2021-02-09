import React from 'react';

import LeftNavBar from '../../components/LeftNavBar';
import CityCard from '../../components/CityCard';

import City from '../../models/City';

import bombinhasIcon from '../../assets/bombinhas.jpg';

import { Container, ContentPane, HeaderWrapper, CitiesList } from './styles';

const cities: City[] = [
  {
    id: '1',
    name: 'Bombinhas',
    image: bombinhasIcon
  }
]

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
          {cities.map(city => (
            <CityCard key={city.id} city={city} />
          ))}
        </CitiesList>
      </ContentPane>
    </Container>
  );
}

export default Cities;
