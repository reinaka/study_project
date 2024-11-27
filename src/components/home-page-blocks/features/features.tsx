import styles from "./features.module.scss";
import { FeatureItem } from "./feature-item/feature-item";

export const Features = () => {
  return (
    <section className={styles.features__wrapper}>
      <img
        src="/features.png"
        alt="features we provide"
        className={styles.features__image}
      />
      <div className={styles.features__contentBlock}>
        <h2 className={styles.features__heading}>
          We Provide Many Features You Can Use
        </h2>
        <p className={styles.features__text}>
          You can explore the features that we provide with fun and have their
          own functions each feature
        </p>
        <div className={styles.features__itemsBlock}>
          <FeatureItem>Powerfull online protection</FeatureItem>
          <FeatureItem>Cashback without borders</FeatureItem>
          <FeatureItem>Personal design</FeatureItem>
          <FeatureItem>Work anywhere in the world</FeatureItem>
        </div>
      </div>
    </section>
  );
};
