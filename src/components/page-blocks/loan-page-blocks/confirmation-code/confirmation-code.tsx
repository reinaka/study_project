import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "@utils/const/const";
import { ApplicationWrapperStateSettersT } from "../application-wrapper";
import styles from "./confirmation-code.module.scss";

export const ConfirmationCode = ({
  setIsLoading,
  setIsSuccess,
  length,
}: ApplicationWrapperStateSettersT & { length: number }) => {
  const [code, setCode] = useState(new Array(length).fill(""));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (isNaN(Number(e.target.value))) return false;
    setCode([
      ...code.map((item, ind) => (ind === index ? e.target.value : item)),
    ]);
    if (e.target.value && index != --length) {
      const nextInput = e.target.parentElement?.nextSibling?.firstChild;
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const value = e.clipboardData.getData("text");
    if (isNaN(Number(value))) return false;
    setCode(value.toString().split("").slice(0, length));
    (e.target as HTMLInputElement).blur();
  };

  const handleDelete = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" || e.code === "Backspace") {
      if (index !== 0) {
        const prevInput = (e.target as HTMLInputElement)?.parentElement
          ?.previousSibling?.firstChild;
        if (prevInput) (prevInput as HTMLInputElement).focus();
      }
    }
  };

  const applicationId = useParams().applicationId;

  const handleSubmit = async (code: number) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${BASE_URL}/document/${applicationId}/sign/code`,
        code,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response);
      if (response.status === 200) {
        setIsSuccess(true);
      }
    } catch {
      // setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (code[length - 1] !== "") {
      handleSubmit(Number(code.join("")));
    }
  }, [code, length]);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Please enter confirmation code</h1>
      <ul className={styles.inputBlock__wrapper}>
        {code.map((digit, index) => (
          <li key={index} className={styles.input__wrapper}>
            <input
              type="text"
              value={digit}
              maxLength={1}
              onChange={e => handleChange(e, index)}
              onPaste={e => handlePaste(e)}
              autoFocus={index === 0}
              onKeyDown={e => handleDelete(e, index)}
              className={`${styles.input} ${code[index] === "" ? styles["input--bg"] : ""}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
