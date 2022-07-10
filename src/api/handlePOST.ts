interface fetchHandlerArgs {
  fetchOptions: RequestInit;
  url: string;
  queryString?: string;
  data: APIData;
}

const handlePOST = async <T>({
  fetchOptions,
  url,
  queryString,
  data,
}: fetchHandlerArgs): Promise<iResponse<T>> => {
  // Attach body to request
  fetchOptions.body = JSON.stringify(data);

  // Attach all parameters to queryable string;
  if (queryString) url = `${url}?${queryString}`;

  // Call the fetch function and parse as JSON
  const request: Response = await fetch(url, fetchOptions);
  const responseData: T = await request.json();

  const response: iResponse<T> = {
    data: responseData,
    code: request.status,
    error: {
      code: request.status,
      message: request.statusText,
    },
  };

  return response;
};

export default handlePOST;
