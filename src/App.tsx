import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import defaultTheme from './theme';
import Radio from './components/Radio';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ThemeProvider theme={defaultTheme}>
      <button type="button" onClick={() => setIsChecked(!isChecked)}>
        button
      </button>
      <Radio value="選項" isChecked={isChecked} isDisabled>
        選項
      </Radio>
    </ThemeProvider>
  );
}

export default App;
