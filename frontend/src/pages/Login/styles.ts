import { Link } from 'react-router-dom';
import styled from 'styled-components';

import loginBackgroundImage from '../../assets/login-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const LeftContainer  = styled.div`
  background: url(${loginBackgroundImage}) no-repeat center;
  background-size: cover;
  flex: 1;
`;

export const RightContainer  = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;


  form {
    display: flex;
    flex-direction: column;
    width: 416px;

    > h1 {
      margin-bottom: 44px;
    }

    input {
      padding: 24px;
      font-size: 16px;
      line-height: 24px;
      color: ${props => props.theme.colors.text};
      border-radius: 10px 10px 0 0;

      & + input {
        border-radius: 0 0 10px 10px;
      }
    }
  }

  button {
    background-color: ${props => props.theme.colors.orange};
    border-radius: 10px;
    padding: 24px;
    color: ${props => props.theme.colors.shapeLighter};
    font-size: 18px;
    font-weight: 500;
  }
`;

export const RemindForgotWrapper  = styled.div`
  margin: 24px 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.text};
    font-size: 16px;
    line-height: 24px;

    input {
      margin-right: 16px;
      width: 24px;
      height: 24px;
      border-radius: 8px;
      background-color: ${props => props.theme.colors.green};
    }
  }
`;

export const ForgotPasswordLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
`;

export const RestrictedAccessInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 80px;

  p {
    width: 139px;
    font-size: 14px;
    line-height: 22px;
    margin-left: 24px;
  }
`;

