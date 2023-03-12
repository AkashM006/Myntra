/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {

  const isDarkMode = true

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={'white'}
      />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>Myntra</Text>
      </View>
      </SafeAreaView>
  );
}

export default App;