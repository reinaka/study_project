import { PrescoringForm, Offers } from "@components/page-blocks";
import { Loader, Notification } from "@components/ui";
import { usePrescoringStore, useApplicationStore } from "@store/index";
import styles from "./prescoring-wrapper.module.scss";

export const PrescoringWrapper = () => {
  const completed = usePrescoringStore.use.completed();
  const loading = usePrescoringStore.use.loading();
  const error = usePrescoringStore.use.error();
  const offers = usePrescoringStore.use.offers();
  const applicationId = useApplicationStore.use.id();

  return completed && applicationId ? (
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
  ) : offers && applicationId ? (
    <Offers offersArr={offers} />
  ) : (
    <PrescoringForm />
  );
};
