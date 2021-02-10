import React from 'react';
import {
  FiArrowLeft,
  FiCalendar,
  FiCamera,
  FiCoffee,
  FiEdit3,
  FiTrash
} from 'react-icons/fi';

import Header from '../../components/Header';
import AddButton from '../../components/AddButton';
import LeftNavBar from '../../components/LeftNavBar';
import ContentPane from '../../components/ContentPane';

import florianopolisIcon from '../../assets/florianopolis.png';

import {
  Container,
  RightWrapper,
  ActionButton,
  HeaderRightWrapper,
  ActionButtonsContainer,
  CityImageBanner,
  CityResumeContainer,
  CityInfoWrapper,
  CityInfoCardsWrapper,
  CityInfoCard
} from './styles';

const City: React.FC = () => {
  return (
    <Container>
      <LeftNavBar />

      <RightWrapper>
        <Header>
          <ActionButton type="button">
            <FiArrowLeft size={16} />
          </ActionButton>

          <HeaderRightWrapper>
            <ActionButtonsContainer>
              <ActionButton type="button">
                <FiEdit3 size={16} />
              </ActionButton>
              <ActionButton style={{ marginLeft: '4px' }} type="button">
                <FiTrash size={16} />
              </ActionButton>
            </ActionButtonsContainer>

            <AddButton text="Adicionar um local" />
          </HeaderRightWrapper>
        </Header>

        <CityImageBanner backgroundImage={florianopolisIcon} />

        <ContentPane>
          <CityResumeContainer>
            <CityInfoWrapper>
              <h1>Florianópolis</h1>

              <strong>Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.</strong>

              <p>É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.</p>
            </CityInfoWrapper>

            <CityInfoCardsWrapper>
              <CityInfoCard>
                <header>
                  <FiCamera size={40} color="#F25D27" />
                </header>

                <div>
                  <h1>67</h1>
                  <span>Pontos Turísticos</span>
                </div>
              </CityInfoCard>

              <CityInfoCard>
                <header>
                  <FiCoffee size={40} color="#F25D27" />
                </header>

                <div>
                  <h1>20</h1>
                  <span>Comida e Bebida</span>
                </div>
              </CityInfoCard>

              <CityInfoCard>
                <header>
                  <FiCalendar size={40} color="#F25D27" />
                </header>

                <div>
                  <h1>11</h1>
                  <span>Eventos Organizados</span>
                </div>
              </CityInfoCard>
            </CityInfoCardsWrapper>
          </CityResumeContainer>
        </ContentPane>
      </RightWrapper>
    </Container>
  );
}

export default City;
