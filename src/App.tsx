import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import defaultTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="contained" isDisabled themeColor="#000">
        按鈕
      </Button>
      <Button variant="outlined" isDisabled>
        按鈕
      </Button>
      <Button variant="text" isDisabled>
        按鈕
      </Button>
    </ThemeProvider>
  );
}

export default App;
