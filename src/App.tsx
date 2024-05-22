import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme';
import Switch from './components/Switch';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Switch unCheckedLabel="ON" checkedLabel="OFFFFFFF" />
    </ThemeProvider>
  );
}

export default App;
