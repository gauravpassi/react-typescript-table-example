interface fetchHandlerArgs {
  fetchOptions: RequestInit;
  url: string;
  queryString?: string;
  id?: ID;
}

const handleGET = async <T>({
  fetchOptions,
  url,
  id,
  queryString,
}: fetchHandlerArgs): Promise<iResponse<T>> => {
  // Attaches ID to url for targeting one document
  if (id) {
    url = `${url}/${id}`;
  }

  // Attach all parameters to queryable string;
  if (queryString) url = `${url}?${queryString}`;

  // Call the fetch function and parse as JSON
  const request: Response = await fetch(url, fetchOptions);

  const data: T = await request.json();

  // console.log(url, data)

  const response: iResponse<T> = {
    data,
    code: request.status,
    error: {
      code: request.status,
      message: request.statusText,
    },
  };

  return response;
};

export default handleGET;
