import { methods } from "@/utils/constants";
import axios from "axios";
const apiClient = async (
  url: string,
  method: methods,
  payload?: any | undefined
) => {
  try {
    // const res = await axios[method](
    //   `http://localhost:3030/api/${url}`,
    //   payload
    // );
    // console.log("x");
    // return res.data.data;
    const config = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    };

    console.log(config);
    const res = await fetch(
      `http://localhost:3030/api/${url}`,
      method == methods.get ? { cache: "no-store" } : config
    );
    const { data } = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { error: true, message: error };
  }
};
export default apiClient;
