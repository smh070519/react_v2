import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './global/globalStyle';
import Styled04 from './pages/docs/_component/Styled04';
import theme from './global/theme';
import Stylde03 from './pages/docs/_component/Stylde03';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Stylde03/>
      </ThemeProvider>
    </>
  );
}

export default App;