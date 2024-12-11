import classNames from "classnames/bind";

import { Button } from "../../../button";
import { ArrowLeft, ArrowRight } from "../../../icons";
import styles from "./buttons-block.module.scss";

export type ButtonBlockPropsT = {
  onClickHandler: (
    scrollTo: "left" | "right",
  ) => React.MouseEventHandler<HTMLButtonElement> | undefined;
  leftButtonActive: boolean;
  rightButtonActive: boolean;
};

export const ButtonsBlock = ({
  onClickHandler,
  leftButtonActive,
  rightButtonActive,
}: ButtonBlockPropsT) => {
  const cx = classNames.bind(styles);
  const leftButtonStyles = cx({
    carousel__button: true,
    "carousel__button--blocked": !leftButtonActive,
  });
  const rightButtonStyles = cx({
    carousel__button: true,
    "carousel__button--blocked": !rightButtonActive,
  });

  return (
    <div className={styles.buttons__wrapper}>
      <Button
        radius="rounded"
        additionalStyles={leftButtonStyles}
        onClick={onClickHandler("left")}
        disabled={!leftButtonActive}
      >
        <ArrowLeft />
      </Button>
      <Button
        radius="rounded"
        additionalStyles={rightButtonStyles}
        onClick={onClickHandler("right")}
        disabled={!rightButtonActive}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};
