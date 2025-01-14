import { PrescoringForm, Offers } from "@components/page-blocks";
import { Loader, Notification } from "@components/ui";
import { selectPrescoring, usePrescoringStore } from "@store/prescoring.store";
import styles from "./prescoring-wrapper.module.scss";

export const PrescoringWrapper = () => {
  const completed = usePrescoringStore(selectPrescoring.completed);
  const loading = usePrescoringStore(selectPrescoring.loading);
  const error = usePrescoringStore(selectPrescoring.error);
  const offers = usePrescoringStore(selectPrescoring.offers);

  return completed ? (
    <Notification
      border
      title="The preliminary decision has been sent to your email."
      additionalStyles={styles.notification}
    >
      In the letter you can get acquainted with the preliminary decision on the
      credit card.
    </Notification>
  ) : loading ? (
    <Loader />
  ) : error ? (
    <Notification>Something went wrong, try again later</Notification>
  ) : offers ? (
    <Offers offersArr={offers} />
  ) : (
    <PrescoringForm />
  );
};
