import styles from "./footer-navigation.module.scss";

const links = [
  {
    title: "About bank",
    to: "#",
  },
  {
    title: "Ask a Question",
    to: "#",
  },
  {
    title: "Quality of service",
    to: "#",
  },
  {
    title: "Requisites",
    to: "#",
  },
  {
    title: "Press center",
    to: "#",
  },
  {
    title: "Bank career",
    to: "#",
  },
  {
    title: "Investors",
    to: "#",
  },
  {
    title: "Analytics",
    to: "#",
  },
  {
    title: "Business and processes",
    to: "#",
  },
  {
    title: "Compliance and business ethics",
    to: "#",
  },
];

export const FooterNavigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        {links.map(item => (
          <li key={item.title} className={styles.navigation__item}>
            <a href={item.to} target="_blank">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
