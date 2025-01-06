import axios from "axios";
import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Button } from "@components/ui/button";
import { ErrorMessage, Label } from "@components/ui";
import { Loader } from "@components/ui";
import { removeSpaces } from "@utils/functions";
import styles from "./subscription-form.module.scss";
import { BASE_URL } from "@utils/const/const";

export type SubscriptionFormPropsT = {
  setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SubscriptionForm = ({
  setIsSubscribed,
}: SubscriptionFormPropsT) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFormSubmit = async (formData: FieldValues) => {
    const formattedData = removeSpaces(formData.email);

    try {
      setIsLoading(true);
      const result = await axios.post(`${BASE_URL}/email`, formattedData);
      if (result.status === 200) {
        setIsSubscribed(true);
        localStorage.setItem("isSubscribedToNews", "true");
      }
      reset();
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Ошибка</div>
      ) : (
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleFormSubmit)}
          noValidate
        >
          <div className={styles.form__mainBlock}>
            <Label additionalStyles={styles.input__wrapper}>
              <img src="/icons/mail.svg" alt="mail icon" />
              <input
                className={styles.form__input}
                type="email"
                placeholder="Your email"
                {...register("email", {
                  required: "Enter email",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Incorrect email address",
                  },
                })}
              />
            </Label>
            <Button radius={20} color="violet" type="submit">
              <p className={styles.button__text}>Subscribe</p>
            </Button>
          </div>
          {errors.email && (
            <ErrorMessage>{`${errors.email.message}` || "Error"}</ErrorMessage>
          )}
        </form>
      )}
    </section>
  );
};
