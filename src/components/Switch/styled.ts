import styled, { css } from 'styled-components';

interface Props {
  $switchWidth: number;
  $labelWidth?: number;
  $thumbSize?: number;
  $isChecked: boolean;
}

export const Label = styled.div<Props>`
  position: relative;

  display: flex;
  justify-content: center;

  padding: 0 ${({ $thumbSize }) => $thumbSize! / 4}px;

  color: aliceblue;
  white-space: nowrap;

  transition: 0.2s;

  // checked 狀態動畫
  ${({ $isChecked, $switchWidth, $labelWidth }) =>
    $isChecked &&
    css`
      transform: translateX(-${$switchWidth! - $labelWidth!}px);
    `}
`;

export const Thumb = styled.div<Props>`
  position: relative;

  width: ${({ $thumbSize }) => $thumbSize}px;
  height: ${({ $thumbSize }) => $thumbSize}px;
  aspect-ratio: 1;
  border-radius: 9999px;

  background-color: #fff;

  transition: 0.2s;

  ${({ $isChecked, $labelWidth }) =>
    $isChecked &&
    css`
      transform: translateX(${$labelWidth}px);
    `}
`;

export const StyledButton = styled.button<Props>`
  // base styles
  position: relative;

  display: flex;
  align-items: center;

  padding: 0;
  width: ${({ $switchWidth }) => $switchWidth}px;
  height: ${({ $thumbSize }) => $thumbSize}px;
  border: 4px solid black;
  border-radius: 9999px;
  outline: none;
  box-sizing: content-box;

  background-color: black;

  cursor: pointer;
`;
