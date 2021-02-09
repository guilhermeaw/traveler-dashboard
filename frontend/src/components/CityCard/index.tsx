import React from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import bombinhasIcon from '../../assets/bombinhas.jpg';

import { Container, ActionButtonsWrapper } from './styles';

const CityCard: React.FC = () => {
  return (
    <Container>
      <img src={bombinhasIcon} alt="city" />

      <ActionButtonsWrapper>
        <button type="button">
          <FiEdit3 size={16} />
        </button>

        <button type="button">
          <FiTrash size={16} />
        </button>
      </ActionButtonsWrapper>

      <footer>
        <strong>Bombinhas</strong>
        <p>21 locais</p>
      </footer>
    </Container>
  );
}

export default CityCard;
