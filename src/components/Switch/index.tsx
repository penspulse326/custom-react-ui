import { useState, useRef, useLayoutEffect } from 'react';
import { StyledButton, Label, Thumb } from './styled';

export interface SwitchProps {
  isChecked?: boolean;
  unCheckedLabel?: string;
  checkedLabel?: string;
}

function Switch({
  isChecked = false,
  unCheckedLabel,
  checkedLabel
}: SwitchProps) {
  const [checked, setChecked] = useState(isChecked);
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef<HTMLDivElement>(null);
  const thumbSize = 18;
  const switchWidth = labelWidth + thumbSize;

  // 計算 label 的寬度，不傳入任何文字的狀況下最小寬度 thumbSize * 1.2，
  useLayoutEffect(() => {
    const minLabelWidth = thumbSize * 1.2;
    const currentLabelWidth = labelRef.current?.offsetWidth ?? 0;
    const width =
      currentLabelWidth > minLabelWidth ? currentLabelWidth : minLabelWidth;

    setLabelWidth(width);
  }, [labelRef.current?.offsetWidth, checked]);

  // 打包 props
  const styledProps = {
    $switchWidth: switchWidth,
    $labelWidth: labelWidth,
    $thumbSize: thumbSize,
    $isChecked: checked
  };

  return (
    <StyledButton
      type="button"
      onClick={() => setChecked(!checked)}
      {...styledProps}
    >
      <Thumb {...styledProps} />
      <Label ref={labelRef} {...styledProps}>
        {checked ? checkedLabel : unCheckedLabel}
      </Label>
    </StyledButton>
  );
}

export default Switch;
