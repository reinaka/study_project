import styles from "./header.module.scss";
import { Logo } from "../logo/logo";
import { Button } from "../button/button";
import { HeaderNavigation } from "./header-navigation/header-navigation";
import { Burger } from "../burger/burger";
import { BurgerStatePropsT } from "../../pages/main-layout-page/main-layout-page";
import { useCallback } from "react";

export type BurgerStateHandlerT = {
  switchBurgerState: React.MouseEventHandler<HTMLAnchorElement>;
};

export const Header = ({
  isBurgerOpen,
  setIsBurgerOpen,
}: BurgerStatePropsT) => {
  const switchBurgerState = useCallback(() => {
    if (isBurgerOpen) setIsBurgerOpen(false);
  }, [isBurgerOpen, setIsBurgerOpen]);

  return (
    <header className={styles.header__wrapper}>
      <Logo switchBurgerState={switchBurgerState} />
      <HeaderNavigation
        switchBurgerState={switchBurgerState}
        isBurgerOpen={isBurgerOpen}
      />
      <Button radius={16}>Online Bank</Button>
      <Burger isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
    </header>
  );
};
