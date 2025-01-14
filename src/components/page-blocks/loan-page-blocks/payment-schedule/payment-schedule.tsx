import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Form } from "../form/form";
import { FormTitle } from "../form";
import { Button, Checkbox } from "@components/ui";
import { ApplicationWrapperStateSettersT } from "@components/page-blocks/loan-page-blocks/";
import { BASE_URL } from "@utils/const/const";
import styles from "./payment-schedule.module.scss";

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

  return (
    <section className={styles.form__wrapper}>
      <Form submitHandler={handleSubmit(handleFormSubmit)}>
        <FormTitle text="Payment Schedule" step={3} />
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
