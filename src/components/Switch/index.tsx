import { useState, useRef, useLayoutEffect } from 'react';
import { StyledButton, Label, Thumb } from './styled';
import { useColor } from '../../hooks/useColor';

export interface SwitchProps {
  isChecked: boolean;
  unCheckedLabel?: string;
  checkedLabel?: string;
  themeColor?: string;
  onChange: () => void;
}

function Switch({
  isChecked = false,
  unCheckedLabel,
  checkedLabel,
  themeColor = 'primary',
  onChange
}: SwitchProps) {
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef<HTMLDivElement>(null);
  const thumbSize = 18;
  const switchWidth = labelWidth + thumbSize;
  const { getColor } = useColor();
  const switchColor = getColor(themeColor, isChecked);

  // 計算 label 的寬度，不傳入任何文字的狀況下最小寬度 thumbSize * 1.2
  // 依賴項為 labelRef 偵測到的寬度 offsetWidth 與 isChecked 狀態
  useLayoutEffect(() => {
    const minLabelWidth = thumbSize * 1.2;
    const currentLabelWidth = labelRef.current?.clientWidth ?? minLabelWidth;

    setLabelWidth(currentLabelWidth);
  }, [labelRef.current?.clientWidth, isChecked]);

  // 打包 props
  const styledProps = {
    $switchWidth: switchWidth,
    $switchColor: switchColor,
    $labelWidth: labelWidth,
    $thumbSize: thumbSize,
    $isChecked: isChecked
  };

  console.log('re-render');

  return (
    <StyledButton type="button" onClick={onChange} {...styledProps}>
      <Thumb {...styledProps} />
      <Label ref={labelRef} {...styledProps}>
        {isChecked ? checkedLabel : unCheckedLabel}
      </Label>
    </StyledButton>
  );
}

export default Switch;
