import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useApplicationStore,
  selectApplicationStore,
} from "@store/application.store";
import { Notification } from "@components/ui";

export type ProtectedPagePropsT = {
  page: JSX.Element;
  status?: string;
  statusCode: number;
};

export const ProtectedPage = ({ page, statusCode }: ProtectedPagePropsT) => {
  const applicationId = Number(useParams().applicationId);
  const fetchData = useApplicationStore(selectApplicationStore.fetchData);
  const loading = useApplicationStore(selectApplicationStore.loading);
  const access = useApplicationStore(selectApplicationStore.access);

  useEffect(() => {
    void fetchData(applicationId, statusCode);
  }, []);

  return loading ? (
    <></>
  ) : access === false ? (
    <Notification>You don't have access to this page</Notification>
  ) : (
    page
  );
};
