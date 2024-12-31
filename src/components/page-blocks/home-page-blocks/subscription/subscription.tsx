import { useState } from "react";
import { SubscriptionForm } from "./subscription-form";
import styles from "./subscription.module.scss";

export const Subscription = () => {
  const [isSubscribed, setIsSubscribed] = useState(
    Boolean(localStorage.getItem("isSubscribedToNews")),
  );

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
      {isSubscribed ? (
        <div>You are already subscribed to the bank's newsletter</div>
      ) : (
        <SubscriptionForm setIsSubscribed={setIsSubscribed} />
      )}
    </section>
  );
};
