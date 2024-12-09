import classNames from "classnames/bind";

import { BurgerStatePropsT } from "../../../pages/main-layout-page";
import { BurgerStateHandlerT } from "../header";
import { HeaderNavLink } from "../header-nav-link";
import styles from "./header-navigation.module.scss";

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
  const cx = classNames.bind(styles);
  const navigationStyles = cx({
    navigation__wrapper: true,
    "navigation__wrapper--burgerOpen": isBurgerOpen,
  });

  return (
    <nav className={navigationStyles}>
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
