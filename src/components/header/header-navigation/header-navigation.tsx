import classNames from "classnames/bind";
import { SwitchBurgerStateT } from "../header";
import { HeaderNavLink } from "../header-nav-link";
import { HEADER_NAVIGATION_ITEMS } from "./header-navigation-items.const";
import styles from "./header-navigation.module.scss";

export type HeaderNavigationPropsT = {
  isBurgerOpen: boolean;
} & SwitchBurgerStateT;

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
        {HEADER_NAVIGATION_ITEMS.map(item => (
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
