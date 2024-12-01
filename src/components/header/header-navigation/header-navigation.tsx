import { HeaderNavLink } from "../header-nav-link/header-nav-link";
import styles from "./header-navigation.module.scss";
import { BurgerStatePropsT } from "../../../pages/main-layout-page/main-layout-page";
import { BurgerStateHandlerT } from "../header";

const links = [
  {
    title: "Credit card",
    to: "/credit-card",
  },
  {
    title: "Product",
    to: "/product",
  },
  {
    title: "Account",
    to: "/account",
  },
  {
    title: "Resources",
    to: "/resources",
  },
];

type HeaderNavigationPropsT = BurgerStateHandlerT &
  Pick<BurgerStatePropsT, "isBurgerOpen">;

export const HeaderNavigation = ({
  isBurgerOpen,
  switchBurgerState,
}: HeaderNavigationPropsT) => {
  return (
    <nav
      className={`${styles.navigation__wrapper} ${isBurgerOpen && styles["navigation__wrapper--burgerOpen"]}`}
    >
      <ul className={styles.navigation}>
        {links.length &&
          links.map(item => (
            <li key={item.title} className={styles.navLink__wrapper}>
              <HeaderNavLink to={item.to} switchBurgerState={switchBurgerState}>
                {item.title}
              </HeaderNavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
