import React from 'react';
import TextField from '@material-ui/core/TextField';

import { CryptoCurrenciesFormProps } from './types';
import './styles.scss';

const CryptoCurrenciesForm = ({
  onSubmit,
  onSymbolChange,
  currentSymbol,
}: CryptoCurrenciesFormProps) => {
  return (
    <div className="add-container">
      <div className="add-form-title">
        <h1>
          Now you can track
          <br />
          all your cryptos here!
        </h1>
        <h2>
          Just enter the
          <br />
          cryptocurrency code on the
          <br />
          form to the
        </h2>
      </div>
      <div className="add-form-container">
        <form className="add-form" onSubmit={onSubmit}>
          <TextField
            label="cryptocurrency code"
            variant="outlined"
            size="small"
            value={currentSymbol}
            onChange={onSymbolChange}
            inputProps={{ style: { textTransform: 'uppercase' } }}
          />
          <input
            type="submit"
            value="Add"
            className={
              'add-button ' + (currentSymbol.length === 3 ? '' : 'disabled')
            }
          />
        </form>
        <p>Use of this service is subject to terms and conditions</p>
      </div>
    </div>
  );
};

export default CryptoCurrenciesForm;
