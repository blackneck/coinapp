import React, {
  FormEvent,
  useCallback,
  useState,
  ChangeEvent,
  useContext,
} from 'react';

import { CryptoCurrenciesContext } from 'context';
import CryptoCurrenciesForm from './CryptoCurrenciesForm';

const CryptoCurrenciesFormContainer = () => {
  const { addCryptoCurrency } = useContext(CryptoCurrenciesContext);

  const [currentSymbol, setCurrentSymbol] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      if (currentSymbol.length !== 3) {
        return;
      }
      setCurrentSymbol('');
      addCryptoCurrency({ symbol: currentSymbol });
    },
    [currentSymbol, addCryptoCurrency]
  );

  const handleSymbolChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setCurrentSymbol(event.target.value);
    },
    []
  );

  return (
    <CryptoCurrenciesForm
      onSubmit={handleSubmit}
      onSymbolChange={handleSymbolChange}
      currentSymbol={currentSymbol}
    />
  );
};

export default CryptoCurrenciesFormContainer;
