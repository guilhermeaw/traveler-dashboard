import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes'

import light from './styles/themes/light'
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />

      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
