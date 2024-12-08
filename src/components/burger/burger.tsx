import classNames from "classnames/bind";

import { BurgerStatePropsT } from "../../pages/main-layout-page";
import styles from "./burger.module.scss";

export const Burger = ({
  isBurgerOpen,
  setIsBurgerOpen,
}: BurgerStatePropsT) => {
  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const cx = classNames.bind(styles);
  const burgerStyles = cx({
    burger: true,
    "burger--active": isBurgerOpen,
  });

  return (
    <button onClick={handleClick} className={burgerStyles}>
      <span></span>
    </button>
  );
};
