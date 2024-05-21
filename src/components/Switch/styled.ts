import styled, { css } from 'styled-components';

interface Props {
  $isChecked: boolean;
}

export const Label = styled.div<Props>`
  position: relative;

  display: flex;
  justify-content: center;

  color: aliceblue;
  line-height: 1.2;

  transition: 0.2s;
`;

export const Thumb = styled.div<Props>`
  position: relative;

  width: 1.2em;
  height: 1.2em;
  aspect-ratio: 1;
  border-radius: 9999px;

  background-color: #fff;

  transition: 0.2s;
`;

export const StyledButton = styled.button`
  // base styles
  position: relative;

  display: flex;
  align-items: center;

  padding: 4px;
  border: none;
  border-radius: 9999px;
  outline: none;

  background-color: black;

  cursor: pointer;
`;
