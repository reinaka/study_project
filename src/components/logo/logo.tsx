import styles from "./logo.module.scss";
import { NavLink, useLocation } from "react-router-dom";

export const Logo = () => {
  const location = useLocation();

  return (
    <NavLink to="/" state={{ from: location.pathname }} className={styles.logo}>
      NeoBank
    </NavLink>
  );
};
