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

  ${({ variant }) =>
    variants[variant as keyof typeof variants] || variants.default}
`;

const variants = {
  default: {
    color: 'white',
    backgroundColor: '#0052cc'
  },
  outlined: {
    color: '#0052cc',
    backgroundColor: 'transparent',
    border: '1px solid #0052cc'
  },
  text: {
    color: '#0052cc',
    backgroundColor: 'transparent',
    border: 'none'
  }
};

export { StyledButton };
