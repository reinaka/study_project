import { Tabs } from "@ui/tabs";
import { AboutCard, Cashback, FAQ } from "./components";

export type CreditCardTabT = {
  title: string;
  content: React.ReactNode | string;
  link: string;
};

const TABS_LIST = [
  {
    title: "About card",
    content: <AboutCard />,
    link: "about-card",
  },
  {
    title: "Rates and conditions",
    content: "kjhnkm",
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

export const CreditCardTabs = () => {
  return <Tabs tabs={TABS_LIST} />;
};
