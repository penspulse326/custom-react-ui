import { RadioIcon, StyledRadio } from './styled';

interface RadioProps {
  children: React.ReactNode;
  value: string;
  isChecked: boolean;
}

const Radio = ({ children, value, isChecked }: RadioProps) => {
  return (
    <StyledRadio>
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
