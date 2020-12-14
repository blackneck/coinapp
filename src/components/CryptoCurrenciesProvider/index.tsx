import React, { createContext, useCallback, useEffect, useState } from 'react';

import { CryptoCurrenciesProviderProps, CryptoCurrency } from './types';

const cryptoCurrenciesEncoded: string =
  localStorage.getItem('cryptoCurrencies') || '{}';

export const CryptoCurrenciesContext = createContext({
  cryptoCurrencies: {},
  addCryptoCurrency: (cryptoCurrency: CryptoCurrency) => {},
  removeCryptoCurrency: (symbol: string) => {},
});

const CryptoCurrenciesProvider = ({
  children,
}: CryptoCurrenciesProviderProps) => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState(
    (): {} => JSON.parse(cryptoCurrenciesEncoded) || {}
  );

  useEffect(() => {
    localStorage.setItem('cryptoCurrencies', JSON.stringify(cryptoCurrencies));
  }, [cryptoCurrencies]);

  const addCryptoCurrency = useCallback(
    (cryptoCurrency: CryptoCurrency): void => {
      setCryptoCurrencies((savedCryptoCurrencies) => ({
        ...savedCryptoCurrencies,
        [cryptoCurrency.symbol]: cryptoCurrency,
      }));
    },
    []
  );

  const removeCryptoCurrency = useCallback((symbol: string): void => {
    setCryptoCurrencies((savedCryptoCurrencies: { [index: string]: {} }) => {
      const { [symbol]: _, ...updatedCryptoCurrencies } = savedCryptoCurrencies;

      return updatedCryptoCurrencies;
    });
  }, []);

  return (
    <CryptoCurrenciesContext.Provider
      value={{ cryptoCurrencies, addCryptoCurrency, removeCryptoCurrency }}
    >
      {children}
    </CryptoCurrenciesContext.Provider>
  );
};

export default CryptoCurrenciesProvider;
