import axios from "axios";

export const getResponseStatus = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.status === 200;
  } catch {
    return false;
  }
};
