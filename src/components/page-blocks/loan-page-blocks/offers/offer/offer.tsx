import axios from "axios";
import { Button } from "@components/ui";
import { OfferWithStatus } from "../offer-with-status";
import { getFormattedNumber } from "@utils/functions";
import { OfferT } from "../offer.type";
import { BASE_URL } from "@utils/const/const";
import { usePrescoringStore, useApplicationStore } from "@store/index";
import styles from "./offer.module.scss";

export const Offer = ({ offer }: { offer: OfferT }) => {
  const setLoading = usePrescoringStore.use.setLoading();
  const setCompleted = usePrescoringStore.use.setCompleted();
  const setError = usePrescoringStore.use.setError();
  const fetchData = useApplicationStore.use.fetchData();
  const applicationId = localStorage.getItem("id");

  const handleSelectOffer = (offer: OfferT) => async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/application/apply`, offer);
      if (response.status === 200) {
        if (applicationId) fetchData(Number(applicationId), undefined);
        setCompleted(true);
        localStorage.removeItem("offers");
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.offer__wrapper}>
      <img
        src="/creditCardOffer.svg"
        alt="offer box"
        className={styles.offer__image}
      />
      <div className={styles.offer__content}>
        <span>
          Requested amount: {getFormattedNumber(offer.requestedAmount)}
        </span>
        <span>Total amount: : {getFormattedNumber(offer.totalAmount)}</span>
        <span>For {offer.term} months</span>
        <span>Monthly payment: {getFormattedNumber(offer.monthlyPayment)}</span>
        <span>Your rate: {offer.rate}%</span>
        <OfferWithStatus included={offer.isInsuranceEnabled}>
          Insurance included
        </OfferWithStatus>
        <OfferWithStatus included={offer.isSalaryClient}>
          Salary client
        </OfferWithStatus>
      </div>
      <Button
        additionalStyles={styles.offer__button}
        radius={8}
        onClick={handleSelectOffer(offer)}
      >
        Select
      </Button>
    </section>
  );
};
