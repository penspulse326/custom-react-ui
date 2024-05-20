import { useColor } from '../../hooks/useColor';
import { StyledButton } from './styled';

export interface ButtonPropsType {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  variant: 'contained' | 'outlined' | 'text';
  themeColor?: string;
}

function Button({
  children,
  isDisabled,
  themeColor,
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
