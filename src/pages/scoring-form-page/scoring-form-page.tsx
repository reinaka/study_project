import { ApplicationWrapper } from "@components/page-blocks/loan-page-blocks";

export const ScoringFormPage = () => {
  return (
    <ApplicationWrapper
      elem="SCORING_FORM"
      notificationTitle="Wait for a decision on the application"
      notificationText="The answer will come to your mail within 10 minutes"
    />
  );
};
