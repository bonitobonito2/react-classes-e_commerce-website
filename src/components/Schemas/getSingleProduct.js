import { gql } from "@apollo/client";

export const getSingleProduct = gql`
    query product($id : String!){
        product(id : $id){
            id,
            name,
            brand
            inStock,
            gallery,
            description,
            category,
            attributes{
              id,
              name,
              type,
              items{
                displayValue,
                value,
                id
              }
            }
            prices{
              currency{
                label,
                symbol
              }
              amount
            }
        }
    }
`;
