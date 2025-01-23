import { useNavigate } from "react-router-dom";
import { Button } from "@components/ui";
import styles from "./page-404.module.scss";

export const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound__wrapper}>
      <div className={styles.notFound__content}>
        <div className={styles.notFound__heading}>
          <span>Oops....</span>
          <h1>Page not found</h1>
        </div>
        <p>This Page doesn`t exist or was removed! We suggest you go back.</p>
        <Button
          onClick={() => navigate(-1)}
          additionalStyles={styles.notFound__button}
        >
          Go Back
        </Button>
      </div>
      <img src="/404.svg" alt="Error 404" className={styles.notFound__image} />
    </div>
  );
};
