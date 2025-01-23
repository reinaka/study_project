import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Form, FormTitle } from "../form";
import { Checkbox, Button } from "@components/ui";
import { ApplicationWrapperStateSettersT } from "@components/page-blocks/loan-page-blocks";
import { BASE_URL } from "@utils/const/const";
import styles from "./documnets-sign.module.scss";

export const DocumentsSign = ({
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
        `${BASE_URL}/document/${applicationId}/sign`,
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
      <Form
        submitHandler={handleSubmit(handleFormSubmit)}
        background="transparent"
      >
        <FormTitle text="Signing of documents" step={4} />
        <p className={styles.form__text}>
          Information on interest rates under bank deposit agreements with
          individuals. Center for Corporate Information Disclosure. Information
          of a professional participant in the securities market. Information
          about persons under whose control or significant influence the Partner
          Banks are. By leaving an application, you agree to the processing of
          personal data, obtaining information, obtaining access to a credit
          history, using an analogue of a handwritten signature, an offer, a
          policy regarding the processing of personal data, a form of consent to
          the processing of personal data.
        </p>
        <a
          href="/credit-card-offer.pdf"
          download
          aria-label="Download ZIP-file"
          className={styles.file}
        >
          Information on your card
        </a>
        <div className={styles.form}>
          <Checkbox label="I agree" register={register} name="checkbox" />
          <Button
            type="submit"
            radius={8}
            additionalStyles={styles.button}
            disabled={!isValid}
            dataTestId="submit-button"
          >
            Send
          </Button>
        </div>
      </Form>
    </section>
  );
};
