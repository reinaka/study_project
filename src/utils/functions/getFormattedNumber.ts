export const getFormattedNumber = (
  num: number,
  noCurrency?: "noCurrency" | undefined,
) => {
  const result = num.toLocaleString("ru", {
    style: "currency",
    currency: "rub",
    minimumFractionDigits: 0,
  });
  return noCurrency ? result.replace(/[^0-9\s]/g, " ") : result;
};
