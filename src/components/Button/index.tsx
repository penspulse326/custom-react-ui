import { useColor } from '../../hooks/useColor';
import { StyledButton, StyledLoader } from './styled';

export interface ButtonPropsType {
  variant: 'contained' | 'outlined' | 'text';
  isDisabled?: boolean;
  themeColor?: string;
  children?: React.ReactNode;
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
      <StyledLoader btnColor={btnColor} {...props} />
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
