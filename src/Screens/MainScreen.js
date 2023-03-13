import { StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import HomeStack from '../Navigation/HomeStack'

const MainScreen = () => {

    const {theme, colors} = useSelector(state => state.theme)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors['LIGHT']}}>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colors['LIGHT']}
      />
      <HomeStack />
    </SafeAreaView>
  )
}

export default MainScreen