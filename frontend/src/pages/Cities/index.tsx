import React from 'react';

import LeftNavBar from '../../components/LeftNavBar';
import CityCard from '../../components/CityCard';
import Header from '../../components/Header';
import AddButton from '../../components/AddButton';
import ContentPane from '../../components/ContentPane';

import City from '../../models/City';

import bombinhasIcon from '../../assets/bombinhas.jpg';

import { Container, RightWrapper, HeaderWrapper, CitiesList } from './styles';

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

      <RightWrapper>
        <Header>
          <HeaderWrapper>
            <h1>Cidades</h1>

            <AddButton text="Adicionar um perfil" />
          </HeaderWrapper>
        </Header>

        <ContentPane>
          <CitiesList>
            {cities.map(city => (
              <>
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
                <CityCard key={city.id} city={city} />
              </>
            ))}
          </CitiesList>
        </ContentPane>
      </RightWrapper>
    </Container>
  );
}

export default Cities;
