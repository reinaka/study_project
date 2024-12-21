import axios from "axios";

export const getData = async (url: string, error_message: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`${error_message}. Error: ${error}`);
  }
};
