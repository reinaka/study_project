export const getDate = () => {
  const currentDate = new Date();
  const options = {
    timeZone: "Europe/Moscow",
  };
  return new Intl.DateTimeFormat("ru-RU", options).format(currentDate);
};
