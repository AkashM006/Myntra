/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Redux/Store';
import MainScreen from './src/Screens/MainScreen';
import RNBootSplash from 'react-native-bootsplash'


function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}>
          <RootSiblingParent>
            <MainScreen />
          </RootSiblingParent>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;