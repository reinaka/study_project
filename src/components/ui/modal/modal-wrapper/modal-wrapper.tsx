import styles from "./modal-wrapper.module.scss";

export type ModalWrapperPropsT = {
  title?: string;
  children: React.ReactNode;
  handleClose: () => void;
};

export const ModalWrapper = ({
  title,
  children,
  handleClose,
}: ModalWrapperPropsT) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.top}>
        <p className={styles.title}>{title}</p>
        <div onClick={handleClose} className={styles.close}>
          <img src="/close.svg" alt="close modal" />
        </div>
      </span>
      {children}
    </div>
  );
};
