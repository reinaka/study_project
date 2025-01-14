import { useParams } from "react-router-dom";
import styles from "./protected-page.module.scss";

export type ProtectedPagePropsT = {
  page: JSX.Element;
  status?: string;
};

export const ProtectedPage = ({ page, status }: ProtectedPagePropsT) => {
  const id = useParams().applicationId;

  return page;
};
