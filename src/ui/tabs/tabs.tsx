import { useState, useCallback } from "react";
import { TabItem } from "./tab-item";
import { TABS } from "@utils/const";
import styles from "./tabs.module.scss";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = useCallback(
    (index: number) => () => setActiveTab(index),
    [],
  );

  return (
    <section>
      <ul className={styles.tabs__list}>
        {TABS.map((tab, ind) => (
          <TabItem
            title={tab.title}
            handleClick={handleClick(ind)}
            isActive={activeTab === ind}
          />
        ))}
      </ul>
      <div>{TABS[activeTab].content}</div>
    </section>
  );
};
