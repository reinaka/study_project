import styles from "./feature-item.module.scss";

export const FeatureItem = ({ children }: { children: string }) => {
  return (
    <div className={styles.feature}>
      <p className={styles.feture__text}>{children}</p>
    </div>
  );
};
