import { AboutCard, Cashback, FAQ, RatesConditions } from "./components";

export type LoanTabT = {
  title: string;
  content: React.ReactNode | string;
  link: string;
};

export const LOAN_TABS_ITEMS = [
  {
    title: "About card",
    content: <AboutCard />,
    link: "about-card",
  },
  {
    title: "Rates and conditions",
    content: <RatesConditions />,
    link: "rates-and-conditions",
  },
  {
    title: "Cashback",
    content: <Cashback />,
    link: "cashback",
  },
  {
    title: "FAQ",
    content: <FAQ />,
    link: "FAQ",
  },
];
