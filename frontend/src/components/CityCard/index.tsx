import React, { useCallback } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import City from '../../models/City';

import { Container, ActionButtonsWrapper } from './styles';

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const history = useHistory();

  const handleNavigateToCity = useCallback(() => {
    history.push(`/cities/${city.id}`);
  }, [history, city]);

  return (
    <Container
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleNavigateToCity}
    >
      <img src={city.image} alt="city" />

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
