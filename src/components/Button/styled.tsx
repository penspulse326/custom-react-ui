import styled, { css } from 'styled-components';
import { ButtonPropsType } from '.';

const containedStyle = css<ButtonPropsType>`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary[700]};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.primary[400]};
    background-color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

const outlinedStyle = css<ButtonPropsType>`
  border: 1px solid ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.primary[500]};
  background-color: white;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary[600]};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.primary[700]};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.primary[200]};
    border: 1px solid ${({ theme }) => theme.colors.primary[200]};
  }
`;

const textStyle = css<ButtonPropsType>`
  color: ${({ theme }) => theme.colors.primary[500]};
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary[700]};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.primary[200]};
  }
`;

const variants = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle
};

const StyledButton = styled.button<ButtonPropsType>`
  // base styles
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 16px;
  border: none;
  border-radius: 4px;
  outline: none;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  transition: 0.3s;

  // variants
  ${({ variant }) =>
    variants[variant as keyof typeof variants] || variants.contained}
`;

export { StyledButton };
