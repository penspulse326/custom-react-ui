import { Label, StyledButton, Thumb } from './styled';

export interface SwitchProps {}

const Switch = () => {
  return (
    <StyledButton>
      <Thumb />
      <Label>開關</Label>
    </StyledButton>
  );
};

export default Switch;
