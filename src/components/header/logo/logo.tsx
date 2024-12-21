import { NavLink, useLocation } from "react-router-dom";
import { SwitchBurgerStateT } from "../header";
import styles from "./logo.module.scss";

export const Logo = ({ switchBurgerState }: SwitchBurgerStateT) => {
  const location = useLocation();

  return (
    <NavLink
      to="/"
      state={{ from: location.pathname }}
      className={styles.logo}
      onClick={switchBurgerState}
    >
      NeoBank
    </NavLink>
  );
};
