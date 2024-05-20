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
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: white;
`;

const textStyle = css<PropsType>`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
`;

const variants = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle
};

const StyledButton = styled.button<PropsType>`
  // base styles
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 16px;
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
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  // variants
  ${({ variant }) =>
    variants[variant as keyof typeof variants] || variants.contained}
`;

export { StyledButton };
