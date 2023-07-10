"use client";
import { amethods } from "@/utils/constants";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetch = (url: string, method: amethods, payload?: any) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios[method](
        `http://localhost:3030/api/${url}`,
        payload
      );
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  }, [url, method]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error };
};
export default useFetch;
