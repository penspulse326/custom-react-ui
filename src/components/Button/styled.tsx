import styled, { css } from 'styled-components';
import { ButtonPropsType } from '.';

interface PropsType extends ButtonPropsType {
  btnColor: string;
}

const containedStyle = css<PropsType>`
  color: white;
  background-color: ${({ btnColor }) => btnColor};
`;

const outlinedStyle = css<PropsType>`
  border: 1px solid ${({ btnColor }) => btnColor};
  color: ${({ btnColor }) => btnColor};
  background-color: white;
`;

const textStyle = css<PropsType>`
  color: ${({ btnColor }) => btnColor};
  background-color: transparent;
`;

const variants = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle
};

export const StyledLoader = styled.span<PropsType>`
  width: 16px;
  aspect-ratio: 1;
  --color: ${({ variant, btnColor }) =>
    variant === 'contained' ? 'white' : btnColor};
  --bg: no-repeat radial-gradient(farthest-side, var(--color) 92%, #0000);
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

export const StyledButton = styled.button<PropsType>`
  // base styles
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 4px 12px;
  border: none;
  border-radius: 4px;
  outline: none;

  cursor: 'pointer';

  transition: 0.3s;

  &:hover {
    filter: saturate(1.2) contrast(1.2);
  }

  &:active {
    opacity: 0.7;
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
  ${({ variant }) =>
    variants[variant as keyof typeof variants] || variants.contained}
`;
