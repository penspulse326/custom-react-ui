import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import defaultTheme from './theme';
import Switch from './components/Switch';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Switch
        isChecked={isChecked}
        unCheckedLabel="ON"
        checkedLabel="OFFFFFFF"
        onChange={() => setIsChecked(!isChecked)}
      />
    </ThemeProvider>
  );
}

export default App;
