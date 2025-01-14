import { Label } from "../label";
import { InputPropsT } from "../inputProps.type";
import { getFormattedNumber } from "@utils/functions";
import styles from "./range.module.scss";

export type RangePropsT = Pick<
  InputPropsT,
  "name" | "label" | "rules" | "register"
> & {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
};

export const Range = ({
  name,
  min,
  max,
  label,
  rules,
  register,
  step,
  value,
}: RangePropsT) => {
  const formatNumber = (num: number) => getFormattedNumber(num, "noCurrency");

  return (
    <div className={styles.range__wrapper}>
      <Label text={label}>
        {value && (
          <div className={styles.range__value}>{formatNumber(value)}</div>
        )}
        <input
          type="range"
          min={`${min}`}
          max={`${max}`}
          step={`${step}`}
          {...(register && register(name, rules))}
          value={value}
        />
      </Label>
      <div className={styles.range__minMaxBlock}>
        <div>{min && formatNumber(min)}</div>
        <div>{max && formatNumber(max)}</div>
      </div>
    </div>
  );
};
