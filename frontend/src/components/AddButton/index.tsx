import React from 'react';

import { Container } from './styles';

interface AddButtonProps {
  text: string
}

const AddButton: React.FC<AddButtonProps> = ({ text }) => {
  return (
    <Container type="button">
      <span>+ {text}</span>
    </Container>
  );
}

export default AddButton;
