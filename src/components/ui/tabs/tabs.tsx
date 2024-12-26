import { useState, useCallback } from "react";
import { TabItem } from "./tab-item";
import { CreditCardTabT } from "@components/page-blocks";
import styles from "./tabs.module.scss";

export const Tabs = ({ tabs }: { tabs: CreditCardTabT[] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = useCallback(
    (index: number) => () => setActiveTab(index),
    [],
  );

  return (
    <section>
      <ul className={styles.tabs__list}>
        {tabs.map((tab, ind) => (
          <li key={tab.link}>
            <TabItem
              title={tab.title}
              handleClick={handleClick(ind)}
              isActive={activeTab === ind}
            />
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </section>
  );
};
