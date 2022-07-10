// We need to declare global here due to the imported type above
// Using imports in a file will force typescript to declare the file as a module, meaning everything will be locally scoped
// This way, we're telling typescript that everything here should be global
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript

type RequestMethods =
  | `GET`
  | `HEAD`
  | `POST`
  | `PUT`
  | `DELETE`
  | `CONNECT`
  | `OPTIONS`
  | `TRACE`
  | `PATCH`;
type APIData = any;
type ID = string;

interface ResponseErrorObj {
  code: number;
  message: string;
}

interface Pagination<T = unknown> {
  results: T[];
  count: number;
  next: string;
  previous: null;
}

interface iResponse<T = unknown> {
  data: T;
  code: number;
  error: ResponseErrorObj;
  fails?: unknown[];
}

interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
