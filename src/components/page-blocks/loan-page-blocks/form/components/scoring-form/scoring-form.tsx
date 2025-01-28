import { useForm, FieldValues } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form } from "../../form";
import { FormTitle } from "../form-title";
import {
  SCORING_FORM_ITEMS__GENERAL,
  SCORING_FORM_ITEMS__EMPLOYMENT,
} from "./scoring-form-items.const";
import { Input, Select, Button } from "@components/ui";
import { BASE_URL } from "@utils/const/const";
import { ApplicationWrapperStateSettersT } from "@components/page-blocks/loan-page-blocks";
import styles from "./scoring-form.module.scss";

export const ScoringForm = ({
  setIsLoading,
  setIsError,
  setIsSuccess,
}: ApplicationWrapperStateSettersT) => {
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
  } = useForm();

  const applicationId = useParams().applicationId;

  const handleFormSubmit = async (formData: FieldValues) => {
    const formattedData = {
      gender: formData.gender,
      maritalStatus: formData.maritalStatus,
      dependentAmount: formData.dependentAmount,
      passportIssueDate: formData.passportIssueDate,
      passportIssueBranch: formData.passportIssueBranch,
      employment: {
        employmentStatus: formData.employmentStatus,
        employerINN: formData.employerINN,
        salary: formData.salary,
        position: formData.position,
        workExperienceTotal: formData.workExperienceTotal,
        workExperienceCurrent: formData.workExperienceCurrent,
      },
      account: "11223344556677889900",
    };

    try {
      setIsLoading(true);
      const response = await axios.put(
        `${BASE_URL}/application/registration/${applicationId}`,
        formattedData,
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

  const itemsToRender = (
    arr:
      | typeof SCORING_FORM_ITEMS__GENERAL
      | typeof SCORING_FORM_ITEMS__EMPLOYMENT,
  ) =>
    arr.map(item => {
      return item.elem === "input" ? (
        <li key={item.name} className={styles.form__input}>
          <Input
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            label={item.label}
            rules={item.rules}
            register={register}
            required={!!item.rules?.required}
            error={errors[item.name]?.message}
            formSubmitted={isSubmitted}
          />
        </li>
      ) : (
        <li key={item.name} className={styles.form__input}>
          <Select
            name={item.name}
            label={item.label}
            options={item.options}
            key={item.name}
            rules={item.rules}
            noDefault={item.noDefault}
            register={register}
            error={errors[item.name]?.message}
            required={!!item.rules?.required}
          />
        </li>
      );
    });

  return (
    <section className={styles.form__wrapper}>
      <Form submitHandler={handleSubmit(handleFormSubmit)}>
        <FormTitle text="Continuation of the application" step={2} />
        <div className={styles.form__content}>
          <ul
            className={`${styles.form__inputList} ${styles["form__inputList--general"]}`}
          >
            {itemsToRender(SCORING_FORM_ITEMS__GENERAL)}
          </ul>
          <h3>Employment</h3>
          <ul
            className={`${styles.form__inputList} ${styles["form__inputList--employment"]}`}
          >
            {itemsToRender(SCORING_FORM_ITEMS__EMPLOYMENT)}
          </ul>
        </div>
        <Button
          type="submit"
          radius={8}
          additionalStyles={styles.button}
          dataTestId="form-button"
        >
          Continue
        </Button>
      </Form>
    </section>
  );
};
