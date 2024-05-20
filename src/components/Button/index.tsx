import { StyledButton } from './styled';

export interface ButtonPropsType {
  children: React.ReactNode;
  isDisabled?: boolean;
  $variant: 'contained' | 'outlined' | 'text';
  $themeColor?: string;
  onClick?: () => void;
}

function Button({ children, isDisabled, onClick, ...props }: ButtonPropsType) {
  return (
    <StyledButton disabled={isDisabled} onClick={onClick} {...props}>
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
