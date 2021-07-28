import fetch from "isomorphic-unfetch";
import { useQuery } from "react-query";

export const useGetVignettes = () =>
  useQuery(
    "vignettes",
    async () => {
      const { results } = await (
        await fetch(`/api/vignette/get-entries`)
      ).json();

      return results;
    },
    { refetchOnMount: "always" }
  );
