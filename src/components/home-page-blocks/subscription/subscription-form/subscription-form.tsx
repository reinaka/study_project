import { useState } from "react";
import { Button } from "@ui/button";
import styles from "./subscription-form.module.scss";

export const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Заготовка на случай, если потребуется кастомная валидация
  // const checkValidation = () => {
  //     const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  //     if(email === '') {
  //         setMessage('Please enter email');
  //     } else if(!regExp.test(email)) {
  //         setMessage('Email is not valid');
  //     } else {
  //         setMessage('');
  //     }
  // }

  const handleFormSubmit = (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.input__wrapper}>
        <img src="/icons/mail.svg" alt="mail icon" />
        <input
          className={styles.form__input}
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <Button radius={20} color="violet" type="submit">
        <p className={styles.button__text}>Subscribe</p>
      </Button>
    </form>
  );
};
