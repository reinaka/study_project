import { useState } from "react";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Outlet } from "react-router-dom";
import styles from "./main-layout-page.module.scss";

export type BurgerStatePropsT = {
  isBurgerOpen: boolean;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MainLayoutPage = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div
      className={`${styles.mainLayout__wrapper} ${isBurgerOpen && styles["mainLayout__wrapper--burgerOpen"]}`}
    >
      <Header isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
