import { AboutCard, Cashback, FAQ, RatesConditions } from "./components";

export type CreditCardTabT = {
  title: string;
  content: React.ReactNode | string;
  link: string;
};

export const TABS_LIST = [
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
