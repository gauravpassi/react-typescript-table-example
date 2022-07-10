interface fetchHandlerArgs {
  fetchOptions: RequestInit;
  url: string;
  queryString?: string;
  data: APIData;
  id?: ID;
}

const handlePATCH = async <T>({
  fetchOptions,
  url,
  id,
  queryString,
  data,
}: fetchHandlerArgs): Promise<iResponse<T>> => {
  // Attaches ID to url for targeting one document
  if (id) {
    url = `${url}/${id}`;
  }

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

export default handlePATCH;
