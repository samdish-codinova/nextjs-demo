import { useEffect, useState } from "react";
import { Author } from "../types";

const query = `
  query GetAllAuthors {
    getAllAuthors {
      name
      id
    }
  }
`;

type AuthorNameId = Array<Pick<Author, "id" | "name">>;

type AllAuthorResponse = {
  data?: {
    getAllAuthors: AuthorNameId;
  } | null;
  errors?: [{ message: string; [x: string]: unknown }];
};

const useAllAuthors = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AuthorNameId | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: query,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response: AllAuthorResponse) => {
        const allAuthors = response.data?.getAllAuthors;
        const errors = response.errors;

        if (allAuthors) {
          setData(allAuthors);
        } else if (errors) {
          setError(errors?.[0].message || "Unexpected error occurred");
        }

        setLoading(false);
      });
  }, []);

  return { loading, data, error };
};

export default useAllAuthors;
