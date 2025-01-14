import { Tabs } from "@components/ui/tabs";
import { LOAN_TABS_ITEMS } from "./loan-tabs-items.const";

export const LoanTabs = () => {
  return <Tabs tabs={LOAN_TABS_ITEMS} />;
};
