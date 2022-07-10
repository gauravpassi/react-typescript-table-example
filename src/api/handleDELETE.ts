interface fetchHandlerArgs {
  fetchOptions: RequestInit;
  url: string;
  queryString?: string;
  id?: ID;
}

const handleDELETE = async <T>({
  fetchOptions,
  url,
  id,
  queryString,
}: fetchHandlerArgs): Promise<T> => {
  // Attaches ID to url for targeting one document
  if (id) {
    url = `${url}/${id}`;
  }

  // Attach all parameters to queryable string;
  if (queryString) url = `${url}?${queryString}`;

  // Call the fetch function and parse as JSON
  const request: Response = await fetch(url, fetchOptions);
  const response: T = await request.json();

  return response;
};

export default handleDELETE;
