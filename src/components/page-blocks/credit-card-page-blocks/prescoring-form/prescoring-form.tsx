import { FieldValues, useForm } from "react-hook-form";
import { Button, Select, Input, Divider } from "@components/ui";
import { FORM_ITEMS } from "./prescoring-form-items.const";
import { getFormattedNumber } from "@utils/functions";
import styles from "./prescoring-form.module.scss";

export const PrescoringForm = () => {
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
  } = useForm();

  const handleFormSubmit = (formData: FieldValues) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.form__wrapper}
    >
      <div className={styles.form__header}>
        <div className={styles.form__headerItem}>
          <div className={styles.form__title}>
            <h2 className={styles.form__heading}>Customize your card</h2>
            <div>Step 1 of 5</div>
          </div>
          <Input
            type={FORM_ITEMS[0].type}
            placeholder={FORM_ITEMS[0].placeholder}
            name={FORM_ITEMS[0].name}
            label={FORM_ITEMS[0].label}
            rules={FORM_ITEMS[0].rules}
            register={register}
            required={!!FORM_ITEMS[0].rules?.required}
            error={errors[FORM_ITEMS[0].name]?.message}
            key={FORM_ITEMS[0].name}
            formSubmitted={isSubmitted}
            additionalStyles={styles["form__input--first"]}
          />
        </div>
        <Divider type="dashed" direction="vertical" />
        <div className={styles.form__headerItem}>
          <h3 className={styles.form__subheading}>
            You have chosen the amount
          </h3>
          <span className={styles.form__chosenAmount}>
            {getFormattedNumber(150000)}
          </span>
          <Divider additionalStyles={styles.divider} />
        </div>
      </div>
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
                />
              </li>
            );
          }
        })}
      </ul>
      <Button type="submit" radius={8} additionalStyles={styles.button}>
        Continue
      </Button>
    </form>
  );
};
