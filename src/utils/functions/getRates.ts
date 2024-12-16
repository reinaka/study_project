import axios from "axios";

import { RATES_KEY } from "../const";

export const getRates = async (base: string) => {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${RATES_KEY}/latest/${base}`,
    );
    return response.data.conversion_rates;
  } catch (error) {
    throw new Error(`Unable to get currency rates: ${error}`);
  }
};
