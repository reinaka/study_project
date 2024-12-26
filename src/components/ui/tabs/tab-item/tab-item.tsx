import classNames from "classnames/bind";
import styles from "./tab-item.module.scss";

export type TabItemPropsT = {
  title: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
};

export const TabItem = ({ title, handleClick, isActive }: TabItemPropsT) => {
  const cx = classNames.bind(styles);
  const tabItemStyles = cx({
    tab__item: true,
    "tab__item--active": isActive,
  });

  return (
    <button onClick={handleClick} className={tabItemStyles}>
      {title}
    </button>
  );
};
