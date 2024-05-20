import { StyledButton } from './styled';

export interface ButtonPropsType {
  children: React.ReactNode;
  $variant: 'contained' | 'outlined' | 'text';
  $btnColor?: string;
}

function Button({ children, ...props }: ButtonPropsType) {
  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
