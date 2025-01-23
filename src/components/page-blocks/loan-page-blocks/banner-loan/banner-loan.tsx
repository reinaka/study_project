import { Button } from "@components/ui/button";
import { CreditCard } from "@components/ui/credit-card";
import { InfoBlock } from "@components/ui/info-block/info-block";
import { Tooltip } from "@components/ui/tooltip";
import { BANNER_LOAN_ITEMS } from "./banner-loan-items.const";
import { OfferT } from "../offers/offer.type";
import { usePrescoringStore, useApplicationStore, StatusT } from "@store/index";
import styles from "./banner-loan.module.scss";

export type BannerLoanPropsT = {
  handleScroll: () => void;
};

const statusForLink = ["APPROVED", "CC_APPROVED", "DOCUMENT_CREATED"];
const getStatusLink = (
  applicationId: number,
  status: StatusT,
  code: number | undefined,
) => {
  switch (status) {
    case "APPROVED":
      return `/loan/${applicationId}`;
    case "CC_APPROVED":
      return `/loan/${applicationId}/document`;
    case "DOCUMENT_CREATED":
      return code
        ? `/loan/${applicationId}/code`
        : `/loan/${applicationId}/document/sign`;
  }
};

const getButtonText = (applicationStatus: StatusT, offers: OfferT[] | null) => {
  if (statusForLink.includes(applicationStatus)) {
    return "Continue registration";
  } else if (offers || applicationStatus === "PREAPPROVAL") {
    return "Choose an offer";
  } else return "Apply for card";
};

export const BannerLoan = ({ handleScroll }: BannerLoanPropsT) => {
  const applicationStatus: StatusT | undefined =
    useApplicationStore.use.status();
  const applicationId = useApplicationStore.use.id();
  const code = useApplicationStore.use.code();
  const offers = usePrescoringStore.use.offers();

  return (
    <section role="banner" className={styles.banner__wrapper}>
      <h1 className={styles.banner__heading}>Platinum digital credit card</h1>
      <p className={styles.banner__text}>
        Our best credit card. Suitable for everyday spending and shopping. Cash
        withdrawals and transfers without commission and interest.
      </p>
      <div className={styles.infoBlock__wrapper}>
        <ul className={styles.infoBlock__list}>
          {BANNER_LOAN_ITEMS.map(item => (
            <li key={item.id}>
              <Tooltip text={item.tooltip}>
                <InfoBlock
                  heading={item.heading}
                  text={item.text}
                  additionalStyles={styles.infoBlock}
                />
              </Tooltip>
            </li>
          ))}
        </ul>
        <Button
          radius={8}
          onClick={handleScroll}
          additionalStyles={styles.button}
          link={
            !!applicationId && applicationStatus
              ? statusForLink.includes(applicationStatus)
              : false
          }
          address={
            applicationId && applicationStatus
              ? getStatusLink(applicationId, applicationStatus, code)
              : ""
          }
        >
          {applicationStatus
            ? getButtonText(applicationStatus, offers)
            : offers &&
                applicationId &&
                (applicationId === undefined ||
                  applicationStatus === "PREAPPROVAL")
              ? "Choose an offer"
              : "Apply for card"}
        </Button>
      </div>
      <CreditCard
        card={{ title: "credit card", src: "/credit-cards/card1.jpg" }}
        additionalStyles={styles.card}
      />
    </section>
  );
};
