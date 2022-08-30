import logo from './logo.svg';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';


import { darkTheme, lightTheme } from './components/Themes';

import { Route, Switch } from 'react-router-dom';

import Main from './components/Main';

import AboutPage from './components/AboutPage';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={Works} />
      </Switch>
    </ThemeProvider>
    </>
  );
}

export default App;
