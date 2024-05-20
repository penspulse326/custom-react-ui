import { StyledButton } from './styled';

interface PropsType {
  children: React.ReactNode;
}

function Button({ children }: PropsType) {
  return (
    <StyledButton>
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
