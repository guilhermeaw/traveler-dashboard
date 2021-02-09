import React from 'react';

import { Container, HeaderWrapper } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <HeaderWrapper>
        {children}
      </HeaderWrapper>
    </Container>
  );
}

export default Header;
