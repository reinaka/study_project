import { Tabs } from "@components/ui/tabs";
import { TABS_LIST } from "./credit-card-tabs.const";

export type CreditCardTabT = {
  title: string;
  content: React.ReactNode | string;
  link: string;
};

export const CreditCardTabs = () => {
  return <Tabs tabs={TABS_LIST} />;
};
