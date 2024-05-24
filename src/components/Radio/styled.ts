import styled, { css } from 'styled-components';

interface Props {
  $radioColor: string;
  $isChecked: boolean;
  $isDisabled: boolean;
}

const StyledRadio = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};

  .radio__checked-icon {
    background-color: ${({ $radioColor }) => $radioColor};
  }

  .radio__unchecked-icon {
    background-color: transparent;
  }

  div {
    border: 2px solid
      ${({ $isChecked, $radioColor }) => ($isChecked ? $radioColor : 'black')};
  }

  span {
    color: ${({ $isChecked, $radioColor }) =>
      $isChecked ? $radioColor : 'black'};

    ${({ $isDisabled }) =>
      !$isDisabled &&
      css`
        &:hover {
          font-weight: 700;
          transform: scale(1.1);
        }
      `}
  }
`;

const RadioIcon = styled.div`
  padding: 2px;
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  box-sizing: border-box;

  background-clip: content-box;
`;

export { StyledRadio, RadioIcon };
