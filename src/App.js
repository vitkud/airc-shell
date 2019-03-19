import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from 'configureStore';

import MainContainer from './components/MainContainer';

class App extends Component {
  render() {
    const cfg = configureStore();

    return (
      <Provider store={cfg.store}>
        <PersistGate loading={null} persistor={cfg.persistor}>
          <MainContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;