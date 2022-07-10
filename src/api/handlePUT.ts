interface fetchHandlerArgs {
  fetchOptions: RequestInit;
  url: string;
  queryString?: string;
  data: APIData;
}

const handlePUT = async <T>({
  fetchOptions,
  url,
  queryString,
  data,
}: fetchHandlerArgs): Promise<T> => {
  // Attach body to request
  fetchOptions.body = JSON.stringify(data);

  // Attach all parameters to queryable string;
  if (queryString) url = `${url}?${queryString}`;

  // Call the fetch function and parse as JSON
  const request: Response = await fetch(url, fetchOptions);
  const response: T = await request.json();

  return response;
};

export default handlePUT;
