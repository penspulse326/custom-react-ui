import { useMemo } from 'react';
import tinycolor from 'tinycolor2';

const useColor = (baseColor) => {
  const shades = useMemo(() => {
    const base = tinycolor(baseColor);

    const generateShade = (percentage) => {
      return base.clone().lighten(percentage).toHexString();
    };

    return {
      '50': generateShade(52),
      '100': generateShade(37),
      '200': generateShade(26),
      '300': generateShade(12),
      '400': generateShade(6),
      '500': base.toHexString(),
      '600': base.clone().darken(6).toHexString(),
      '700': base.clone().darken(12).toHexString(),
      '800': base.clone().darken(18).toHexString(),
      '900': base.clone().darken(24).toHexString(),
      '950': base.clone().darken(36).toHexString()
    };
  }, [baseColor]);

  return shades;
};

export default useColor;
