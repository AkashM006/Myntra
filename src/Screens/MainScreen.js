import { StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MainScreen = () => {

    const {theme, colors} = useSelector(state => state.theme)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors['LIGHT']}}>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
    </SafeAreaView>
  )
}

export default MainScreen