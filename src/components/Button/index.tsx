import { StyledButton } from './styled';

export interface ButtonPropsType {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}

function Button({ children, ...props }: ButtonPropsType) {
  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
