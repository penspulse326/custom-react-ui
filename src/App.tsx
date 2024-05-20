import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import defaultTheme from './theme.config';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>按鈕</Button>
    </ThemeProvider>
  );
}

export default App;
