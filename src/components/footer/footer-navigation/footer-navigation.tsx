import { FOOTER_NAVIGATION_ITEMS } from "./footer-navigation-items.const";
import styles from "./footer-navigation.module.scss";

export const FooterNavigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        {FOOTER_NAVIGATION_ITEMS.map(item => (
          <li key={item.id} className={styles.navigation__item}>
            <a href={item.to} target="_blank">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
