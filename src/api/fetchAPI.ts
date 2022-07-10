import handleGET from "./handleGET";
import handlePOST from "./handlePOST";
import handlePUT from "./handlePUT";
import handlePATCH from "./handlePATCH";
import handleDELETE from "./handleDELETE";

interface fetchAPIProps {
  method: RequestMethods;
  route: string;
  queryString?: string;
  id?: ID;
  data?: APIData;
  headers?: { timezone: string };
}

const fetchAPI = async <T>({
  method,
  route,
  id,
  queryString,
  data,
}: fetchAPIProps): Promise<iResponse<T>> => {
  // Use the backend API URL base (e.g. https://localhost:9000) + the route

  const apiBase = "https://swapi.dev";
  const url = `${apiBase}/${route}`;

  // Construct fetch options using the getIdTokenResult Firebase value
  const fetchOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    method,
  };

  let response: iResponse<T>;
  switch (method) {
    default:
    case `GET`:
      response = await handleGET({ fetchOptions, url, queryString, id });
      break;
    case `POST`:
      response = await handlePOST({ fetchOptions, url, queryString, data });
      break;
    case `PUT`:
      response = await handlePUT({ fetchOptions, url, queryString, data });
      break;
    case `PATCH`:
      response = await handlePATCH({
        fetchOptions,
        url,
        queryString,
        id,
        data,
      });
      break;
    case `DELETE`:
      response = await handleDELETE({ fetchOptions, url, queryString, id });
      break;
  }

  if (response.code === 403) {
    localStorage.clear();
  }
  return response;
};

export default fetchAPI;
