import { Button } from "../../../button";
import { ArrowLeft, ArrowRight } from "../../../icons";
import styles from "./buttons-block.module.scss";

export const ButtonsBlock = ({
  onClickHandler,
}: {
  onClickHandler: (
    scrollTo: "left" | "right",
  ) => React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <div className={styles.buttons__wrapper}>
      <Button
        radius="rounded"
        additionalStyles={styles.carousel__button}
        onClick={onClickHandler("left")}
      >
        <ArrowLeft />
      </Button>
      <Button
        radius="rounded"
        additionalStyles={styles.carousel__button}
        onClick={onClickHandler("right")}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};
