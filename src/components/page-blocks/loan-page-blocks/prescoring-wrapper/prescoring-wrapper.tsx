import { PrescoringForm, Offers } from "@components/page-blocks";
import { Loader, Notification } from "@components/ui";
import {
  selectPrescoringStore,
  usePrescoringStore,
} from "@store/prescoring.store";
import styles from "./prescoring-wrapper.module.scss";

export const PrescoringWrapper = () => {
  const completed = usePrescoringStore(selectPrescoringStore.completed);
  const loading = usePrescoringStore(selectPrescoringStore.loading);
  const error = usePrescoringStore(selectPrescoringStore.error);
  const offers = usePrescoringStore(selectPrescoringStore.offers);

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
