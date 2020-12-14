import { CryptoCurrency } from 'components/CryptoCurrenciesProvider/types';

export type CryptoCurrensiesListItemProps = {
  label: string;
  onDelete: (symbol: string) => void;
};

export type CryptoCurrensiesListProps = {
  cryptoCurrenciesList: Array<CryptoCurrency>;
  handleDelete: (symbol: string) => void;
};
