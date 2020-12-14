import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import client from 'api/ApolloClient';
import CryptoCurrenciesProvider from 'components/CryptoCurrenciesProvider';
import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CryptoCurrenciesProvider>
        <App />
      </CryptoCurrenciesProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
