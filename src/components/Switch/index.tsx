import { useState, useRef } from 'react';
import { StyledButton, Label, Thumb } from './styled';

export interface SwitchProps {
  isChecked?: boolean;
}

function Switch({ isChecked = false, ...props }: SwitchProps) {
  const [checked, setChecked] = useState(isChecked);
  const labelRef = useRef<HTMLDivElement>(null);
  const width = labelRef.current?.offsetWidth;

  return (
    <StyledButton type="button" onClick={() => setChecked(!checked)}>
      <Thumb $isChecked={checked} $width={width} />
      <Label ref={labelRef} $isChecked={checked} $width={width}>
        開關開關
      </Label>
    </StyledButton>
  );
}

export default Switch;
