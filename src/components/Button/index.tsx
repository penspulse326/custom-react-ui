import { useColor } from '../../hooks/useColor';
import { StyledButton, StyledLoader } from './styled';

interface Props {
  variant: 'contained' | 'outlined' | 'text';
  isDisabled?: boolean;
  isLoading?: boolean;
  themeColor?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({
  variant,
  isDisabled = false,
  isLoading = false,
  themeColor = 'primary',
  children,
  onClick,
  ...props
}: Props) {
  const { getColor } = useColor();
  const btnColor = getColor(themeColor, isLoading || isDisabled);

  return (
    <StyledButton
      type="button"
      disabled={isLoading || isDisabled}
      onClick={onClick}
      $variant={variant}
      $color={btnColor}
      {...props}
    >
      {isLoading && (
        <StyledLoader $variant={variant} $color={btnColor} {...props} />
      )}
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
