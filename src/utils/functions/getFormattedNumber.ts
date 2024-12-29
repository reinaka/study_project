export const getFormattedNumber = (num: number) =>
  num.toLocaleString("ru", {
    style: "currency",
    currency: "rub",
    minimumFractionDigits: 0,
  });
