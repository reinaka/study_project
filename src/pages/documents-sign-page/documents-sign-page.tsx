import { ApplicationWrapper } from "@components/page-blocks/loan-page-blocks";

export const DocumentsSignPage = () => {
  return (
    <ApplicationWrapper
      elem="DOCUMENTS_SIGN"
      notificationTitle="Documents have been successfully signed and sent for approval"
      notificationText="Within 10 minutes you will be sent a PIN code to your email for confirmation"
    />
  );
};
