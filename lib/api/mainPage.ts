import { gqlFetch } from "./gql-fetch";

type Result = {
  mainPages: [
    {
      id: string;
      title: string;
    }
  ];
};

const query = `
query MainPage {
  mainPages {
    id
    title
  }
}
`;

export const getMainPage = () =>
  gqlFetch<Result>(query).then((res) => res.mainPages[0].title);
