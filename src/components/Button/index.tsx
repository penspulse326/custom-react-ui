import { useColor } from '../../hooks/useColor';
import { StyledButton, Loader } from './styled';

interface ButtonProps {
  /**
   * 文字內容
   */
  children?: React.ReactNode;
  /**
   * 傳入 className
   */
  className?: string;
  /**
   * 自定義樣式
   */
  style?: React.CSSProperties;
  /**
   * 點擊事件
   */
  onClick?: () => void;
  /**
   * 按鈕類型
   */
  variant: 'contained' | 'outlined' | 'text';
  /**
   * 是否禁用
   */
  isDisabled?: boolean;
  /**
   * 是否讀取中
   */
  isLoading?: boolean;
  /**
   * 自定義顏色
   */
  themeColor?: string;
  /**
   * 傳入 icon
   */
  startIcon?: React.ReactNode;
  /**
   * 傳入 icon
   */
  endIcon?: React.ReactNode;
}

/**
 * `Button` 代表一個可點擊的按鈕，點擊之後會觸發相應的邏輯。
 */

function Button({
  children,
  variant = 'contained',
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
      {...props}
      type="button"
      disabled={isLoading || isDisabled}
      $variant={variant}
      $color={btnColor}
    >
      {isLoading && <Loader $variant={variant} $color={btnColor} />}
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </StyledButton>
  );
}

export default Button;
