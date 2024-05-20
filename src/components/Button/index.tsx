import { useColor } from '../../hooks/useColor';
import { StyledButton } from './styled';

export interface ButtonPropsType {
  children: React.ReactNode;
  variant: 'contained' | 'outlined' | 'text';
  isDisabled?: boolean;
  themeColor?: string;
  onClick?: () => void;
}

function Button({
  children,
  isDisabled = false,
  themeColor = 'primary',
  onClick,
  ...props
}: ButtonPropsType) {
  const { getColor } = useColor();
  const btnColor = getColor(themeColor, isDisabled);

  return (
    <StyledButton
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      btnColor={btnColor}
      {...props}
    >
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
