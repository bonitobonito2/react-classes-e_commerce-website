import { gql } from "@apollo/client";

export const getCategories = gql`
  query categories {
    categories {
      name
    }
  }
`;
