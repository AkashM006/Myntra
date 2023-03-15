/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Redux/Store';
import MainScreen from './src/Screens/MainScreen';
import { foregroundNotificationListener, getFCMToken } from './src/utils/Pushnotifications';

function App() {

  useEffect(() => {
    getFCMToken()

    const unsubscribe = foregroundNotificationListener()

    return unsubscribe
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;