import { useCallback, useState } from "react";
import { Burger } from "@ui/burger";
import { Button } from "@ui/button";
import { HeaderNavigation } from "./header-navigation";
import { Logo } from "./logo";
import styles from "./header.module.scss";

export type SwitchBurgerStateT = {
  switchBurgerState: () => void;
};

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const bodyElem = document.getElementsByTagName("body")[0];

  const openBurger = useCallback(() => {
    setIsBurgerOpen(true);
    bodyElem.style.overflow = "hidden";
  }, []);

  const closeBurger = useCallback(() => {
    setIsBurgerOpen(false);
    bodyElem.style.overflow = "auto";
  }, []);

  const switchBurgerState = useCallback(() => {
    if (isBurgerOpen) closeBurger();
  }, [isBurgerOpen, setIsBurgerOpen]);

  return (
    <header className={styles.header__wrapper}>
      <Logo switchBurgerState={switchBurgerState} />
      <HeaderNavigation
        switchBurgerState={switchBurgerState}
        isBurgerOpen={isBurgerOpen}
      />
      <Button>Online Bank</Button>
      <Burger
        isBurgerOpen={isBurgerOpen}
        openBurger={openBurger}
        closeBurger={closeBurger}
      />
    </header>
  );
};
