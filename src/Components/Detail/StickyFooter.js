import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import ICONS from '../../icons/icons'
import { useSelector } from 'react-redux'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'

const StickyFooter = ({ scroll, footer, addToBag, addToWishlist, wishlisted, sizeContainer }) => {

    // const topEdge = footer?.y + sizeContainer?.height - 40
    const { colors } = useSelector(state => state.theme)
    const COLORS = colors

    // const rStyle = useAnimatedStyle(() => {
    //     return {
    //         transform: [
    //             {
    //                 translateY: interpolate(
    //                     scroll.value,
    //                     [-1, 0, topEdge - 1, topEdge, topEdge + 1],
    //                     [0, 0, 0, 0, -1]
    //                 )
    //             }
    //         ]
    //     }
    // })

    return (
        <>
            {footer && <Animated.View
                style={[styles.container, { backgroundColor: colors['LIGHT'] }]}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={addToWishlist} style={[styles.button, { borderColor: 'lightgray', borderWidth: 1, width: '40%' }]}>
                        <Image source={{ uri: wishlisted ? ICONS.ICON_HEART_ACTIVE : ICONS.ICON_HEART }} style={[styles.icon,{ tintColor: colors['DARK'] }]} />
                        <CustomText color={colors['DARK']} weight={'light'} style={[styles.text]}>
                            WISHLIST
                        </CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addToBag} style={[styles.button, { backgroundColor: colors['PRIMARY'], width: '50%' }]}>
                        <Image tintColor={'white'} source={{ uri: ICONS.ICON_BAG }} style={styles.icon} />
                        <CustomText weight={'light'} color={COLORS.WHITE} style={[styles.text,]}>
                            ADD TO BAG
                        </CustomText>
                    </TouchableOpacity>
                </View>
            </Animated.View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: verticalScale(70),
        position: 'absolute',
        bottom: 0,
        zIndex: 12,
        left: 0,
        right: 0,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: verticalScale(10),
        borderRadius: moderateScale(3),
        height: verticalScale(50)
    },
    icon: {
        height: verticalScale(30),
        aspectRatio: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: verticalScale(10),
        paddingHorizontal: horizontalScale(10)
    },
    text: { marginLeft: horizontalScale(10) }
})

export default StickyFooter