import { Banner } from "../../components/banner/banner";
import styles from "./home-page.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home__wrapper}>
      <Banner />
    </div>
  );
};
