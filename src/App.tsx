import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Main = React.lazy(() =>  import('./pages/Main'));

const Loader = styled.div`
  display: flex;
  align-items:center ;
  justify-content:center ;
`;

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <React.Suspense fallback={<Loader>Loading...</Loader>}>
        <BrowserRouter>
          <Routes>
            <Route index element={ <Main /> } />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
}
export default App;