import { NavLink, useLocation } from "react-router-dom";

import { BurgerStateHandlerT } from "../header";
import styles from "./header-nav-link.module.scss";

export type HeaderNavLinkPropsT = {
  to: string;
  children: string | React.ReactNode;
} & BurgerStateHandlerT;

export const HeaderNavLink = ({
  to,
  children,
  switchBurgerState,
}: HeaderNavLinkPropsT) => {
  const location = useLocation();

  return (
    <NavLink
      to={to}
      state={{ from: location.pathname }}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles["link--active"] : ""}`
      }
      onClick={switchBurgerState}
    >
      {children}
    </NavLink>
  );
};
