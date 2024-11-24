import { HeaderNavLink } from "../header-nav-link/header-nav-link";
import styles from "./header-navigation.module.scss";

export const HeaderNavigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <HeaderNavLink to="/credit-card">Credit card</HeaderNavLink>
        <HeaderNavLink to="/product">Product</HeaderNavLink>
        <HeaderNavLink to="/account">Account</HeaderNavLink>
        <HeaderNavLink to="/resources">Resources</HeaderNavLink>
      </ul>
    </nav>
  );
};
