import { gql } from '@apollo/client';

export const GET_PRICE_IN_EURO = gql`
  query getPriceInEuro($baseSymbol: String!) {
    markets(
      filter: { baseSymbol: { _eq: $baseSymbol }, quoteSymbol: { _eq: "EUR" } }
    ) {
      ticker {
        lastPrice
      }
    }
  }
`;
