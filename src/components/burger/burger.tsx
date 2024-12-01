import styles from "./burger.module.scss";
import { BurgerStatePropsT } from "../../pages/main-layout-page/main-layout-page";

export const Burger = ({
  isBurgerOpen,
  setIsBurgerOpen,
}: BurgerStatePropsT) => {
  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <button
      onClick={handleClick}
      className={`${styles.burger} ${isBurgerOpen && styles["burger--active"]}`}
    >
      <span></span>
    </button>
  );
};
