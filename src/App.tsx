import React from 'react';

import CryptoCurrenciesForm from 'components/CryptoCurrenciesForm/CryptoCurrenciesFormContainer';
import Home from 'components/Home/HomeContainer';
import CryptoCurrenciesList from 'components/CryptoCurrenciesList/CryptoCurrensiesListContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Home>
        <div className="main-container">
          <CryptoCurrenciesForm />
          <CryptoCurrenciesList />
        </div>
      </Home>
      <footer className="App-footer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
        rutrum nisi. Cras faucibus mattis cursus. Pellentesque id varius justo.
        Aenean tristique bibendum magna. Aliquam tristique massa vel cursus
        mattis. Donec iaculis magna at leo volutpat viverra. Maecenas et
        suscipit nunc. Proin dui justo.
      </footer>
    </div>
  );
}

export default App;
