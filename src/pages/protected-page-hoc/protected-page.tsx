import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApplicationStore } from "@store/index";
import { Notification } from "@components/ui";

export type ProtectedPagePropsT = {
  page: JSX.Element;
  status?: string;
  statusCode: number;
};

export const ProtectedPage = ({ page, statusCode }: ProtectedPagePropsT) => {
  const applicationId = Number(useParams().applicationId);
  const fetchData = useApplicationStore.use.fetchData();
  const loading = useApplicationStore.use.loading();
  const access = useApplicationStore.use.access();
  const userId = useApplicationStore.use.id();

  useEffect(() => {
    void fetchData(applicationId, statusCode);
  }, []);

  return loading ? (
    <></>
  ) : access === false || userId !== applicationId ? (
    <Notification>You don't have access to this page</Notification>
  ) : (
    page
  );
};
