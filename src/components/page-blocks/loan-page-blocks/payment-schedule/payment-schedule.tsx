import { useCallback, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Form } from "../form/form";
import { FormTitle } from "../form";
import { Button, Checkbox, Table, Modal } from "@components/ui";
import { DenyApplicationModal } from "./deny-application-modal";
import { ApplicationWrapperStateSettersT } from "@components/page-blocks/loan-page-blocks/";
import { BASE_URL } from "@utils/const/const";
import { useApplicationStore } from "@store/index";
import styles from "./payment-schedule.module.scss";

const tableCols = {
  number: "number",
  date: "date",
  totalPayment: "total payment",
  interestPayment: "interest payment",
  debtPayment: "debt payment",
  remainingDebt: "remaining debt",
};

export const PaymentSchedule = ({
  setIsLoading,
  setIsError,
  setIsSuccess,
}: ApplicationWrapperStateSettersT) => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm();

  const [isModal, setIsModal] = useState(false);
  const closeButton = useCallback(() => setIsModal(false), []);
  const applicationId = useParams().applicationId;

  const handleFormSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${BASE_URL}/document/${applicationId}`,
      );
      if (response.status === 200) {
        setIsSuccess(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const schedule = useApplicationStore.use.schedule();

  return (
    <section className={styles.form__wrapper}>
      <Form
        submitHandler={handleSubmit(handleFormSubmit)}
        additionalStyles={styles.table}
      >
        <FormTitle text="Payment Schedule" step={3} />
        {schedule && <Table data={schedule} tableCols={tableCols} />}
        <div className={styles.bottomBlock}>
          <Button
            radius={8}
            additionalStyles={styles.button}
            color="red"
            onClick={() => setIsModal(true)}
          >
            Deny
          </Button>
          <div className={styles.form}>
            <Checkbox
              label="I agree with the payment schedule"
              register={register}
              name="checkbox"
            />
            <Button
              type="submit"
              radius={8}
              additionalStyles={styles.button}
              disabled={!isValid}
            >
              Send
            </Button>
          </div>
        </div>
      </Form>
      {isModal && (
        <Modal title="Deny application" handleClose={closeButton}>
          <DenyApplicationModal onClose={closeButton} />
        </Modal>
      )}
    </section>
  );
};
