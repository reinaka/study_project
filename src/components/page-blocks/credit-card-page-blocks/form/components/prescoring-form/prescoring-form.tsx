import { useState } from "react";
import axios from "axios";
import { FieldValues, useForm, useWatch } from "react-hook-form";
import { Form } from "../..";
import {
  Button,
  Select,
  Range,
  Input,
  Divider,
  Notification,
  Loader,
} from "@components/ui";
import { FORM_ITEMS } from "./prescoring-form-items.const";
import { FormTitle } from "../form-title/form-title";
import { getFormattedNumber, removeSpaces } from "@utils/functions";
import { BASE_URL } from "@utils/const/const";
import styles from "./prescoring-form.module.scss";

export const PrescoringForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestSuccessful, setIsRequestSuccessful] = useState<
    null | boolean
  >(null);

  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    control,
  } = useForm();

  const handleFormSubmit = async (formData: FieldValues) => {
    const formattedData = {
      ...formData,
      amount: Number(formData.amount),
      firstName: removeSpaces(formData.firstName),
      lastName: removeSpaces(formData.lastName),
      middleName:
        formData.middleName === "" ? null : removeSpaces(formData.middleName),
      email: removeSpaces(formData.email),
      term: Number(formData.term),
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${BASE_URL}/application`,
        formattedData,
      );
      if (response.status === 200) setIsRequestSuccessful(true);
    } catch {
      setIsRequestSuccessful(false);
    } finally {
      setIsLoading(false);
    }
  };

  const amount = useWatch({
    control,
    name: "amount",
    defaultValue: "150000",
  });

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : isRequestSuccessful !== null ? (
        <Notification>
          {isRequestSuccessful
            ? "Your data is sucessfully sent. You will get credit card offers soon"
            : "Something went wrong"}
        </Notification>
      ) : (
        <Form submitHandler={handleSubmit(handleFormSubmit)}>
          {/* Верхний блок */}
          <div className={styles.form__header}>
            <div className={styles.form__headerItem}>
              <FormTitle text="Customize your card" step={1} />
              <Range
                name={FORM_ITEMS[0].name}
                label={FORM_ITEMS[0].label}
                rules={FORM_ITEMS[0].rules}
                register={register}
                value={Number(amount)}
                min={FORM_ITEMS[0].rules?.min?.value}
                max={FORM_ITEMS[0].rules?.max?.value}
                step={15000}
              />
            </div>
            <Divider type="dashed" direction="vertical" />
            <div className={styles.form__headerItem}>
              <h3 className={styles.form__subheading}>
                You have chosen the amount
              </h3>
              <span className={styles.form__chosenAmount}>
                {getFormattedNumber(Number(amount))}
              </span>
              <Divider additionalStyles={styles.divider} />
            </div>
          </div>
          {/* Основной блок */}
          <div>
            <h3 className={styles.form__subheading}>Contact Information</h3>
          </div>
          <ul className={styles.form__inputList}>
            {FORM_ITEMS.map((item, inx) => {
              if (inx > 0) {
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
                      register={register}
                    />
                  </li>
                );
              }
            })}
          </ul>
          <Button type="submit" radius={8} additionalStyles={styles.button}>
            Continue
          </Button>
        </Form>
      )}
    </section>
  );
};
