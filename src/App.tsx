import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme';
import Switch from './components/Switch';
import Button from './components/Button';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="contained">Button</Button>
      <Switch />
    </ThemeProvider>
  );
}

export default App;
