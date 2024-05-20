import { useTheme } from 'styled-components';

const checkColor = (color: string) => {
  const regex =
    /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)/gi;
  return regex.test(color);
};

export const useColor = () => {
  const theme = useTheme();

  const getColor = (themeColor = 'primary', isDisabled = false) => {
    if (isDisabled) {
      return theme.colors.disable;
    }

    const isLegalColor = checkColor(themeColor);

    if (isLegalColor) {
      return themeColor;
    }

    return (
      theme.colors[themeColor as keyof typeof theme.colors] ||
      theme.colors.primary
    );
  };

  return { getColor };
};

export default { useColor };
