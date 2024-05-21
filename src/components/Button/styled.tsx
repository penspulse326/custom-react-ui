import styled, { css } from 'styled-components';

interface Props {
  $color: string;
  $variant: 'contained' | 'outlined' | 'text';
}

const containedStyle = css<Props>`
  color: white;
  background-color: ${({ $color }) => $color};
`;

const outlinedStyle = css<Props>`
  border: 1px solid ${({ $color }) => $color};
  color: ${({ $color }) => $color};
  background-color: white;
`;

const textStyle = css<Props>`
  color: ${({ $color }) => $color};
  background-color: transparent;
`;

const variants = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle
};

export const StyledButton = styled.button<Props>`
  // base styles
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 4px 12px;
  border: none;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;

  font-size: 16px;

  cursor: 'pointer';

  transition: 0.3s;

  &:hover {
    filter: saturate(2);
  }

  &:active {
    filter: brightness(0.8);
  }

  // disabled
  &:disabled {
    &,
    &:hover,
    &:active {
      filter: none;
      cursor: not-allowed;
    }
  }

  // variants
  ${({ $variant }) => variants[$variant] || variants.contained}
`;

export const StyledLoader = styled.span<Props>`
  --color: ${({ $variant, $color }) =>
    $variant === 'contained' ? 'white' : $color};
  --bg: no-repeat radial-gradient(farthest-side, var(--color) 92%, #0000);

  width: 16px;
  aspect-ratio: 1;

  background:
    var(--bg) top,
    var(--bg) left,
    var(--bg) right,
    var(--bg) bottom;
  background-size: 4px 4px;

  animation: spin 1s infinite;

  @keyframes spin {
    to {
      transform: rotate(0.5turn);
    }
  }
`;
