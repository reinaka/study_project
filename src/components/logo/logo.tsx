import styles from "./logo.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { BurgerStateHandlerT } from "../header/header";

export const Logo = ({ switchBurgerState }: BurgerStateHandlerT) => {
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
