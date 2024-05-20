import styled from 'styled-components';
import { ButtonPropsType } from '.';

const StyledButton = styled.button<ButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 16px;
  border: none;
  border-radius: 4px;
  outline: none;

  cursor: pointer;

  transition:
    color 0.2s,
    background-color 0.2s,
    border 0.2s,
    opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }

  ${({ variant, theme }) =>
    variants[variant as keyof typeof variants](theme) ||
    variants.default(theme)}
`;

const variants = {
  default: (theme) => ({
    color: 'white',
    backgroundColor: theme.colors.primary['500']
  }),
  outlined: (theme) => ({
    color: theme.colors.primary['500'],
    backgroundColor: 'transparent',
    border: `1px solid ${theme.colors.primary['500']}`
  }),
  text: (theme) => ({
    color: theme.colors.primary['500'],
    backgroundColor: 'transparent',
    border: 'none'
  })
};

export { StyledButton };
