import { StyledButton } from './styled';

export interface ButtonPropsType {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  variant: 'contained' | 'outlined' | 'text';
  themeColor?: string;
}

function Button({ children, isDisabled, onClick, ...props }: ButtonPropsType) {
  return (
    <StyledButton
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
