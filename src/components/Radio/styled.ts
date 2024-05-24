import styled from 'styled-components';

interface Props {
  $radioColor: string;
  $isDisabled: boolean;
}

const StyledRadio = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ $isDisabled, $radioColor }) =>
    $isDisabled ? $radioColor : 'black'};

  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};

  .radio__checked-icon {
    background-color: ${({ $radioColor }) => $radioColor};
  }

  .radio__unchecked-icon {
    background-color: transparent;
  }

  div {
    border: 2px solid ${({ $radioColor }) => $radioColor};
  }

  &:hover {
    span {
      font-weight: 700;
      transform: scale(1.1);
    }
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
