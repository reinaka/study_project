import { Banner } from "../../components/home-page-blocks/banner/banner";
import { Features } from "../../components/home-page-blocks/features/features";
import { Locations } from "../../components/home-page-blocks/locations/locations";
import styles from "./home-page.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home__wrapper}>
      <Banner />
      <Features />
      <Locations />
    </div>
  );
};
