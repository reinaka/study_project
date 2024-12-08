import classNames from "classnames/bind";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import styles from "./main-layout-page.module.scss";

export type BurgerStatePropsT = {
  isBurgerOpen: boolean;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MainLayoutPage = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const cx = classNames.bind(styles);
  const wrapperStyles = cx({
    mainLayout__wrapper: true,
    "mainLayout__wrapper--burgerOpen": isBurgerOpen,
  });

  return (
    <div className={wrapperStyles}>
      <Header isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
