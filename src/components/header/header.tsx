import { useCallback } from "react";

import { BurgerStatePropsT } from "../../pages/main-layout-page";
import { Burger } from "../burger";
import { Button } from "../button";
import { Logo } from "../logo";
import styles from "./header.module.scss";
import { HeaderNavigation } from "./header-navigation";

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
