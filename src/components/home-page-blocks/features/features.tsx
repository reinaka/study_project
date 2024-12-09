import { FeatureItem } from "./feature-item";
import styles from "./features.module.scss";

const features = [
  "Powerfull online protection",
  "Cashback without borders",
  "Personal design",
  "Work anywhere in the world",
];

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
        <ul className={styles.features__itemsBlock}>
          {features.map(feature => (
            <li key={feature}>
              <FeatureItem>{feature}</FeatureItem>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
