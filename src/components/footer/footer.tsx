import { FooterNavigation } from "./footer-navigation";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer__wrapper}>
      <div className={styles.footer}>
        <div className={styles.footer__topBlock}>
          <a href="https://www.neoflex.ru/" target="_blank">
            <img
              src="/neoflex_logo.png"
              alt="Neoflex logo"
              className={styles.footer__logo}
            ></img>
          </a>
          <address className={styles.footer__addressBlock}>
            <a href="tel:+74959842513" className={styles.footer__tel}>
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru">info@neoflex.ru</a>
          </address>
        </div>
        <FooterNavigation />
        <p className={styles.footer__cookiesText}>
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </p>
      </div>
    </footer>
  );
};
