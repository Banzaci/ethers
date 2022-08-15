const fetchApi = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json() as T;
}

export default fetchApi;