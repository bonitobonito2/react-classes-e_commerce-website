import { gql } from "@apollo/client/core";

export const getProducts = gql`
  query category($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        inStock
        inStock
        gallery
        description
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
