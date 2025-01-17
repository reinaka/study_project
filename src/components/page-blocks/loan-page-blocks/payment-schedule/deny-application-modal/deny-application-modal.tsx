import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@components/ui";
import { BASE_URL } from "@utils/const/const";
import styles from "./deny-application-modal.module.scss";

export type DenyApplicationModalPropsT = {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

export const DenyApplicationModal = ({
  onClose,
}: DenyApplicationModalPropsT) => {
  const [confirmed, setConfirmed] = useState(false);
  const applicationId = useParams().applicationId;

  const handleDeny = async (applicationId: string) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/application/${applicationId}/deny`,
      );
      if (response.status === 200) {
        setConfirmed(true);
      }
    } catch {
      console.log("Error");
    }
  };

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
            <Button
              color="red"
              onClick={() => handleDeny(applicationId as string)}
            >
              Deny
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </>
        )}
      </div>
    </div>
  );
};
