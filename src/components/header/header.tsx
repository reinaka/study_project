import styles from "./header.module.scss";
import { Logo } from "../logo/logo";
import { Button } from "../button/button";
import { HeaderNavigation } from "./header-navigation/header-navigation";

export const Header = () => {
  return (
    <header className={styles.header__wrapper}>
      <Logo />
      <HeaderNavigation />
      <Button radius={16}>Online Bank</Button>
    </header>
  );
};
