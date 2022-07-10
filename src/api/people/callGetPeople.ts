import fetchAPI from "../fetchAPI";

export const callGetPeople = async (): Promise<
  iResponse<Pagination<People>>
> => {
  const response: iResponse<Pagination<People>> = await fetchAPI({
    method: `GET`,
    route: `api/people`,
  });

  return response;
};

export default callGetPeople;
