import { CryptoCurrency } from 'context/types';

export type CryptoCurrensiesListItemProps = {
  label: string;
  onDelete: (symbol: string) => void;
};

export type CryptoCurrensiesListProps = {
  cryptoCurrenciesList: Array<CryptoCurrency>;
  handleDelete: (symbol: string) => void;
};
