import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Form } from "../form/form";
import { FormTitle } from "../form";
import { Button, Checkbox, Table } from "@components/ui";
import { ApplicationWrapperStateSettersT } from "@components/page-blocks/loan-page-blocks/";
import { BASE_URL } from "@utils/const/const";
import {
  selectApplicationStore,
  useApplicationStore,
} from "@store/application.store";
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

  const schedule = useApplicationStore(selectApplicationStore.schedule);

  return (
    <section className={styles.form__wrapper}>
      <Form
        submitHandler={handleSubmit(handleFormSubmit)}
        additionalStyles={styles.table}
      >
        <FormTitle text="Payment Schedule" step={3} />
        {schedule && <Table data={schedule} tableCols={tableCols} />}
        <div className={styles.bottomBlock}>
          <Button radius={8} additionalStyles={styles.button} color="red">
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
    </section>
  );
};
