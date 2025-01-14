import styles from "./locations.module.scss";

export const Locations = () => {
  return (
    <section className={styles.locations__wrapper}>
      <h2 className={styles.locations__heading}>
        You can use our services anywhere in the world
      </h2>
      <p className={styles.locations__text}>
        Withdraw and transfer money online through our application
      </p>
      <img
        src="/locations.svg"
        alt="locations map"
        className={styles.locations__map}
      />
    </section>
  );
};
