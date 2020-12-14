import { ChangeEvent, FormEvent } from 'react';

export type CryptoCurrenciesFormProps = {
  currentSymbol: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSymbolChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
