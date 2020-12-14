import React from 'react';

import CryptocurrenciesListItem from './CryptocurrenciesListItem';
import { CryptoCurrensiesListProps } from './types';
import './styles.scss';

const CryptoCurrensiesList = ({
  cryptoCurrenciesList,
  handleDelete,
}: CryptoCurrensiesListProps) => {
  return (
    <div className="list-container">
      {cryptoCurrenciesList.map((cryptoCurrency) => (
        <CryptocurrenciesListItem
          key={cryptoCurrency.symbol}
          label={cryptoCurrency.symbol}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CryptoCurrensiesList;
