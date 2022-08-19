import { gql } from "@apollo/client";

export const getCurrencies = gql`
    query  currencies{
        currencies{
            label,
            symbol
        }
        
    }
`