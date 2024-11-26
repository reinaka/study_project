import { NavLink, useLocation } from "react-router-dom";
import styles from "./header-nav-link.module.scss";

type HeaderNavLinkPropsT = {
  to: string;
  children: string | React.ReactNode;
};

export const HeaderNavLink = ({ to, children }: HeaderNavLinkPropsT) => {
  const location = useLocation();

  return (
    <NavLink
      to={to}
      state={{ from: location.pathname }}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles["link--active"] : ""}`
      }
    >
      {children}
    </NavLink>
  );
};
