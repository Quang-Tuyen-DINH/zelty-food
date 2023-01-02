import { BadgeStyled } from "../styles/Badge.styled";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  dark?: boolean;
  active?: boolean;
  warning?: boolean;
}

export const Badge = ({ children, dark, active, warning, ...props }: Props) => {
  return (
    <BadgeStyled $dark={dark} $active={active} $warning={warning} {...props}>
      {children}
    </BadgeStyled>
  );
};
