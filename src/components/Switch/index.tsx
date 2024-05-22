import { useState } from 'react';
import { StyledButton, Label, Thumb } from './styled';

export interface SwitchProps {}

const Switch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <StyledButton type="button" onClick={() => setChecked(!checked)}>
      <Thumb $isChecked={checked} />
      <Label $isChecked={checked}></Label>
    </StyledButton>
  );
};

export default Switch;
