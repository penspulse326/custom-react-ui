import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  // base styles
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 12px;
  width: 100px;
  height: 20px;
  border: none;
  outline: none;

  background-color: black;

  cursor: 'pointer';
`;

export const Label = styled.div`
  position: absolute;

  color: aliceblue;
`;

export const Thumb = styled.div`
  position: absolute;
  left: 0;

  width: 16px;
  height: 16px;

  background-color: #fff;
`;
