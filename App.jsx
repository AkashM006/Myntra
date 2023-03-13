/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Redux/Store';
import MainScreen from './src/Screens/MainScreen';

function App() {

  const isDarkMode = true

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainScreen />
      </PersistGate>
    </Provider>
  );
}

export default App;