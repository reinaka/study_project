import styles from "./modal-overlay.module.scss";

type ModalOverlayPropsT = {
  handleClose: React.EventHandler<React.SyntheticEvent<HTMLDivElement, Event>>;
  children?: React.ReactNode;
};

export const ModalOverlay = ({ handleClose, children }: ModalOverlayPropsT) => {
  return (
    <div className={styles.overlay} onClick={handleClose}>
      {children}
    </div>
  );
};
