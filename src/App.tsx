import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme';
import Switch from './components/Switch';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Switch fontSize={80} />
    </ThemeProvider>
  );
}

export default App;
