import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, LeftContainer, RightContainer, RemindForgotWrapper, ForgotPasswordLink, RestrictedAccessInfoWrapper } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <LeftContainer />

      <RightContainer>

        <form action="">
          <h1>Fazer login</h1>

          <input placeholder="E-mail" type="text" />
          <input placeholder="Senha" type="text" />

          <RemindForgotWrapper>
            <label htmlFor="remind">
              <input type="checkbox" id="remind" />
              Lembrar-me
            </label>

            <ForgotPasswordLink to="/">Esqueci minha senha</ForgotPasswordLink>
          </RemindForgotWrapper>

          <button type="submit">
            Acessar plataforma
          </button>

          <RestrictedAccessInfoWrapper>
            <FiAlertCircle size={24} color="#F25D27" />
            <p>Acesso restrito à sócios e moderadores</p>
          </RestrictedAccessInfoWrapper>
        </form>

      </RightContainer>
    </Container>
  );
}

export default Login;
