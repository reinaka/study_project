import { useState } from "react";
import { Button } from "@components/ui";
import styles from "./deny-application-modal.module.scss";

export type DenyApplicationModalPropsT = {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

export const DenyApplicationModal = ({
  onClose,
}: DenyApplicationModalPropsT) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className={styles.wrapper}>
      <p>
        {confirmed
          ? "Your application has been denied!"
          : "You exactly sure, you want to cancel this application?"}
      </p>
      <div className={styles.buttons}>
        {confirmed ? (
          <Button link address="/" additionalStyles={styles["button--goHome"]}>
            Go home
          </Button>
        ) : (
          <>
            <Button color="red" onClick={() => setConfirmed(true)}>
              Deny
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </>
        )}
      </div>
    </div>
  );
};
