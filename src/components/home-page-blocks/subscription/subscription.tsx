import { SubscriptionForm } from "./subscription-form/subscription-form";
import styles from "./subscription.module.scss";

export const Subscription = () => {
  return (
    <section className={styles.subscription__wrapper}>
      <p className={styles.subscription__support}>Support</p>
      <h2 className={styles.subscription__heading}>
        <span className={styles["subscription__heading--top"]}>
          Subscribe Newsletter & get{" "}
        </span>
        <span className={styles["subscription__heading--bottom"]}>
          Bank News
        </span>
      </h2>
      <SubscriptionForm />
    </section>
  );
};
