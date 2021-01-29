import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiList, FiMapPin, FiMessageSquare, FiPower } from 'react-icons/fi';

import logoIcon from '../../assets/logo.svg';

import { Container } from './styles';

const LeftNavBar: React.FC = () => {
  return (
    <Container>
      <img src={logoIcon} alt="traveler" />

      <nav>
        <NavLink to="/">
          <FiMapPin color="#fff" size={24} />
        </NavLink>

        <NavLink style={{ margin: '40px 0' }} to="/">
          <FiList color="#fff" size={24} />
        </NavLink>

        <NavLink to="/">
          <FiMessageSquare color="#fff" size={24} />
        </NavLink>
      </nav>

      <button type="button">
        <FiPower color="#fff" size={24} />
      </button>
    </Container>
  );
}

export default LeftNavBar;
