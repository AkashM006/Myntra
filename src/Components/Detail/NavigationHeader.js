import { View, TouchableOpacity, StyleSheet, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Animated, { interpolate, interpolateColor, useAnimatedStyle } from 'react-native-reanimated'
import CustomText from '../Reusable/CustomText'
import { substring } from '../../utils/utils'
import ICONS from '../../icons/icons'
import { horizontalScale, verticalScale } from '../../utils/Metrics'
import { useSelector } from 'react-redux'

const NavigationHeader = ({ scroll, name }) => {

    const navigation = useNavigation()
    const height = useWindowDimensions().height
    const imageHeight = height / 1.35
    const { theme, colors } = useSelector(state => state.theme)
    const startColor = theme === 'light' ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)'
    const endColor = theme === 'light' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'
 
    const rStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                scroll.value,
                [0, imageHeight + 10],
                [startColor, endColor]
            ),
            // opacity: interpolate(
            //     scroll.value,
            //     [0, imageHeight + 10],
            //     [0, 1]
            // )
        }
    }, [])

    const textStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scroll.value,
                [0, imageHeight - 30, imageHeight - 10],
                [0, 0, 1]
            )
        }
    }, [])

    return (
        <>
            {scroll && <Animated.View style={[styles.header, rStyle, ]}>
                <View style={styles.leftContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.iconContainer,{ backgroundColor: colors['LIGHT'] }]}>
                        <Image source={{ uri: ICONS.ICON_BACK }} style={[styles.icon, { tintColor: colors['DARK'] }]} />
                    </TouchableOpacity>
                    <CustomText color={colors['DARK']} isAnimated={true} weight={'bold'} size={18} style={textStyle}>
                        {substring(name, 20)}
                    </CustomText>
                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity style={[styles.iconContainer,{ backgroundColor: colors['LIGHT'] }]}>
                        <Image source={{ uri: ICONS.ICON_SHARE }} style={[styles.icon, { tintColor: colors['DARK'] }]} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.iconContainer,{ backgroundColor: colors['LIGHT'] }]} onPress={() => navigation.navigate('Wishlist')} >
                        <Image source={{ uri: ICONS.ICON_HEART }} style={[styles.icon, { tintColor: colors['DARK'] }]} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.iconContainer,{ backgroundColor: colors['LIGHT'] }]}>
                        <Image source={{ uri: ICONS.ICON_BAG }} style={[styles.icon, { tintColor: colors['DARK'] }]} />
                    </TouchableOpacity>
                </View>
            </Animated.View>}
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 20,
        padding: verticalScale(10),
        paddingHorizontal: horizontalScale(10),
        paddingRight: '5%'
    },
    iconContainer: {
        padding: verticalScale(10),
        paddingHorizontal: horizontalScale(10),
        alignSelf: 'flex-start',
        borderRadius: 100
    },
    icon: {
        height: verticalScale(20),
        aspectRatio: 1
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '45%'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default NavigationHeader