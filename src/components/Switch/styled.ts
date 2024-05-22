import styled, { css } from 'styled-components';

interface Props {
  $width?: number;
  $isChecked: boolean;
}

export const Label = styled.div<Props>`
  position: relative;

  display: flex;
  justify-content: center;

  margin: 0 0.25em;

  color: aliceblue;
  white-space: nowrap;

  transition: 0.2s;

  // checked 狀態動畫
  ${({ $isChecked }) =>
    $isChecked &&
    css`
      transform: translateX(-1.25em);
    `}
`;

export const Thumb = styled.div<Props>`
  position: relative;

  width: 1.25em;
  height: 1.25em;
  aspect-ratio: 1;
  border-radius: 9999px;

  background-color: #fff;

  transition: 0.2s;

  // 位移量是 label 實際寬度 $width 再加上 label 的 margin-x
  ${({ $isChecked, $width }) =>
    $isChecked &&
    css`
      transform: translateX(calc(${$width}px + 0.5em));
    `}
`;

export const StyledButton = styled.button`
  // base styles
  position: relative;

  display: flex;
  align-items: center;

  padding: 0.25em;
  border: none;
  border-radius: 9999px;
  outline: none;

  background-color: black;
  cursor: pointer;
`;
