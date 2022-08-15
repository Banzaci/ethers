import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useAsync = <T>(url:string) => {
  const [data, setData] = useState<T | null>();
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    axios
      .get<T>(url)
      .then((response: { data: T }) => setData(response.data))
      .finally(() => setLoading(false))
  }, [])
  return { data, loading } as const;
}

export default useAsync;