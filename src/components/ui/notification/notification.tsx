import classNames from "classnames/bind";
import styles from "./notification.module.scss";

export type NotificationPropsT = {
  title?: string;
  children?: string | React.ReactNode;
  border?: boolean;
  additionalStyles?: string;
};

export const Notification = ({
  title,
  children,
  border,
  additionalStyles,
}: NotificationPropsT) => {
  const cx = classNames.bind(styles);
  const notificationStyles = cx({
    notification__wrapper: true,
    "notification__wrapper--border": border,
    [`${additionalStyles}`]: additionalStyles,
  });

  return (
    <div className={notificationStyles}>
      {title && <h3 className={styles.notification__title}>{title}</h3>}
      {children}
    </div>
  );
};
