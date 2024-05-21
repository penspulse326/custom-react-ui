import { useColor } from '../../hooks/useColor';
import { StyledButton, StyledLoader } from './styled';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  variant: 'contained' | 'outlined' | 'text';
  isDisabled?: boolean;
  isLoading?: boolean;
  themeColor?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

function Button({
  children,
  variant,
  isDisabled = false,
  isLoading = false,
  themeColor = 'primary',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
  const { getColor } = useColor();
  const btnColor = getColor(themeColor, isLoading || isDisabled);

  return (
    <StyledButton
      type="button"
      disabled={isLoading || isDisabled}
      $variant={variant}
      $color={btnColor}
      {...props}
    >
      {isLoading && <StyledLoader $variant={variant} $color={btnColor} />}
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </StyledButton>
  );
}

export default Button;
