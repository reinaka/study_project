import { useState } from "react";
import { Loader, Notification, Button } from "@components/ui";
import { ScoringForm } from "../form/components";
import { PaymentSchedule } from "../payment-schedule";
import { DocumentsSign } from "../documents-sign";
import { ConfirmationCode } from "../confirmation-code";
import styles from "./application-wrapper.module.scss";

export type ApplicationWrapperPropsT = {
  elem:
    | "SCORING_FORM"
    | "PAYMENT_SCHEDULE"
    | "DOCUMENTS_SIGN"
    | "CONFIRMATION_CODE";
  notificationTitle: string;
  notificationText: string;
};

export type ApplicationWrapperStateSettersT = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ApplicationWrapper = ({
  elem,
  notificationTitle,
  notificationText,
}: ApplicationWrapperPropsT) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const content = (elem => {
    if (elem === "SCORING_FORM")
      return (
        <ScoringForm
          setIsLoading={setIsLoading}
          setIsError={setIsError}
          setIsSuccess={setIsSuccess}
        />
      );
    else if (elem === "PAYMENT_SCHEDULE")
      return (
        <PaymentSchedule
          setIsLoading={setIsLoading}
          setIsError={setIsError}
          setIsSuccess={setIsSuccess}
        />
      );
    else if (elem === "DOCUMENTS_SIGN")
      return (
        <DocumentsSign
          setIsLoading={setIsLoading}
          setIsError={setIsError}
          setIsSuccess={setIsSuccess}
        />
      );
    else if (elem === "CONFIRMATION_CODE")
      return (
        <ConfirmationCode
          setIsLoading={setIsLoading}
          setIsError={setIsError}
          setIsSuccess={setIsSuccess}
          length={4}
        />
      );
  })(elem);

  const successNotofication = (elem => {
    return elem === "CONFIRMATION_CODE" ? (
      <div className={styles.codeNotification__wrapper}>
        <img src="/creditCardOffer.svg" alt="Successfull offer application" />
        <Notification
          title={notificationTitle}
          additionalStyles={styles.notification}
        >
          {notificationText}
        </Notification>
        <Button>View other offers of our bank</Button>
      </div>
    ) : (
      <Notification
        title={notificationTitle}
        additionalStyles={styles.notification}
      >
        {notificationText}
      </Notification>
    );
  })(elem);

  return (
    <div className={styles.page__wrapper}>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Notification>Something went wrong, try again later</Notification>
      ) : isSuccess ? (
        successNotofication
      ) : (
        content
      )}
    </div>
  );
};
