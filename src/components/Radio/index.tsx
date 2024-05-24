import { useColor } from '../../hooks/useColor';
import { RadioIcon, StyledRadio } from './styled';

interface RadioProps {
  children: React.ReactNode;
  value: string;
  isChecked: boolean;
  isDisabled?: boolean;
  themeColor?: string;
}

const Radio = ({
  children,
  value,
  isChecked,
  isDisabled = false,
  themeColor = 'primary'
}: RadioProps) => {
  const { getColor } = useColor();
  const radioColor = getColor(themeColor, isDisabled);

  return (
    <StyledRadio $isChecked $isDisabled={isDisabled} $radioColor={radioColor}>
      {isChecked ? (
        <RadioIcon className="radio__checked-icon" />
      ) : (
        <RadioIcon className="radio__unchecked-icon" />
      )}
      <span>{children}</span>
    </StyledRadio>
  );
};

export default Radio;
