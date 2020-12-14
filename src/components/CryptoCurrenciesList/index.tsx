import React, { useCallback, useContext, useMemo } from 'react';

import { CryptoCurrency } from 'components/CryptoCurrenciesProvider/types';
import { CryptoCurrenciesContext } from 'components/CryptoCurrenciesProvider';
import CryptoCurrensiesList from './CryptoCurrensiesList';

const CryptoCurrenciesListContainer = () => {
  const { cryptoCurrencies, removeCryptoCurrency } = useContext(
    CryptoCurrenciesContext
  );

  const handleDelete = useCallback(
    (label: string): void => {
      removeCryptoCurrency(label);
    },
    [removeCryptoCurrency]
  );

  const cryptoCurrenciesList = useMemo(
    (): Array<CryptoCurrency> => Object.values(cryptoCurrencies),
    [cryptoCurrencies]
  );

  return (
    <CryptoCurrensiesList
      cryptoCurrenciesList={cryptoCurrenciesList}
      handleDelete={handleDelete}
    />
  );
};

export default CryptoCurrenciesListContainer;
