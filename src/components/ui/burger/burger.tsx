import classNames from "classnames/bind";
import styles from "./burger.module.scss";

export type BurgerStatePropsT = {
  isBurgerOpen: boolean;
  openBurger: () => void;
  closeBurger: () => void;
};

export const Burger = ({
  isBurgerOpen,
  openBurger,
  closeBurger,
}: BurgerStatePropsT) => {
  const cx = classNames.bind(styles);
  const burgerStyles = cx({
    burger: true,
    "burger--active": isBurgerOpen,
  });

  return (
    <button
      onClick={isBurgerOpen ? closeBurger : openBurger}
      className={burgerStyles}
    >
      <span></span>
    </button>
  );
};
