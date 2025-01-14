// для приведения курса к виду "1 единица валюты = х рублей"
const calculateRate = (num: number) => (1 / num).toFixed(2);

export const getChosenRates = (
  ratesList: { [key: string]: number },
  ratesArr: string[],
) => {
  const chosenRates = [];
  for (const key in ratesList) {
    for (let i = 0; i < ratesArr.length; i++) {
      if (key === ratesArr[i]) {
        chosenRates.push({
          title: key,
          rate: calculateRate(ratesList[key]),
        });
      }
    }
  }
  return chosenRates;
};
