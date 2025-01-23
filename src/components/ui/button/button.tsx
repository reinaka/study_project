import classNames from "classnames/bind";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./button.module.scss";

export type ButtonPropsT = {
  children: string | React.ReactNode;
  radius?: 8 | 16 | 20 | "rounded";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  color?: "blue" | "violet" | "red";
  additionalStyles?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  link?: boolean;
  address?: string;
};

export const Button = ({
  children,
  radius,
  disabled,
  type,
  color,
  additionalStyles,
  onClick,
  link,
  address,
}: ButtonPropsT) => {
  const cx = classNames.bind(styles);
  const buttonStyles = cx({
    button: true,
    [`button--${color ? color : "blue"}`]: true,
    [`button--${radius ? radius : 16}`]: true,
    [`${additionalStyles}`]: additionalStyles,
  });

  const location = useLocation();

  return link && address ? (
    <NavLink
      className={buttonStyles}
      state={{ from: location.pathname }}
      to={address}
    >
      {children}
    </NavLink>
  ) : (
    <button
      className={buttonStyles}
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
