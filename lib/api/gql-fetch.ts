import { contentApi } from "./constants";

export const gqlFetch = async <TQueryResult>(query: string) => {
  const result = await fetch(contentApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data } = await result.json();

  return data as TQueryResult;
};
