import { Divider } from "@components/ui";
import styles from "./info-block.module.scss";

export type InfoBlockPropsT = {
  num: number;
  text: string | React.ReactNode;
};

export const InfoBlock = ({ num, text }: InfoBlockPropsT) => {
  return (
    <section className={styles.infoBlock__wrapper}>
      <div className={styles.bulletBlock}>
        <div className={styles.bullet}>{num}</div>
        <Divider additionalStyles={styles.divider} />
      </div>
      <p className={styles.text}>{text}</p>
    </section>
  );
};
