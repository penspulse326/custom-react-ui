import styled from 'styled-components';

const StyledRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  .radio__checked-icon {
    background-color: black;
  }

  .radio__unchecked-icon {
    background-color: transparent;
  }
`;

const RadioIcon = styled.div`
  padding: 2px;
  width: 16px;
  height: 16px;
  border: 2px solid black;
  border-radius: 9999px;
  box-sizing: border-box;

  background-clip: content-box;
`;

export { StyledRadio, RadioIcon };
