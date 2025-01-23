import classNames from "classnames/bind";
import styles from "./offer-with-status.module.scss";

export type OfferWithStatusPropsT = {
  children: string;
  included?: boolean;
};

export const OfferWithStatus = ({
  children,
  included,
}: OfferWithStatusPropsT) => {
  const cx = classNames.bind(styles);
  const OfferWithStatusStyles = cx({
    offer: true,
    "offer--included": included,
    "offer--notIncluded": !included,
  });

  return <span className={OfferWithStatusStyles}>{children}</span>;
};
