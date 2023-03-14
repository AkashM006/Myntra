import { Image, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'
import CustomText from '../Reusable/CustomText'
import ICONS from '../../icons/icons'

const Header = () => {

    const {colors} = useSelector(state => state.theme)

  return (
    <View style={[styles.container, {backgroundColor: colors['LIGHT']}]}>
      <View style={styles.leftContainer}>
        <Image style={styles.logo} source={{uri: ICONS.ICON_LOGO}} />
        <View style={{marginLeft: horizontalScale(5)}}>
            <CustomText size={moderateScale(10)} >Become</CustomText>
            <CustomText size={moderateScale(10)} color={colors['PRIMARY']}>Insider</CustomText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: verticalScale(60),
        width: '100%',
        paddingHorizontal: horizontalScale(20),
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        height: verticalScale(30),
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    leftContainer: {
        flexDirection: 'row',
        aligntItems: 'center',
    }
})

export default Header