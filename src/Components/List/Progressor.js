import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import { useRoute } from '@react-navigation/native'
import { substring } from '../../utils/utils'
import ICONS from '../../icons/icons'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'
import { useSelector } from 'react-redux'

const Progressor = ({ count, items, goTop }) => {

    const { title } = useRoute().params
    const {colors} = useSelector(state => state.theme)
    const COLORS = colors

    return (
        <>
            {items >= 10 && <View style={[styles.animatedContainer,{ borderColor: colors['SHADOW'] }]}>
                <TouchableOpacity style={styles.container} onPress={goTop}>
                    <View style={styles.leftContainer}>
                        <Image tintColor={'white'} source={{ uri: ICONS.ICON_BACK }} style={styles.icon} />
                        <CustomText weight='light' color={COLORS.WHITE} style={styles.text}>
                            {substring(title.toUpperCase(), 10)}
                        </CustomText>
                    </View>
                    <CustomText weight='light' color={COLORS.WHITE} style={styles.text}>
                        {items}/{count}
                    </CustomText>
                </TouchableOpacity>
            </View>}
        </>
    )
}

const styles = StyleSheet.create({
    animatedContainer: {
        position: 'absolute',
        zIndex: 12,
        top: verticalScale(30),
        width: '50%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(100)
    },
    container: {
        width: '100%',
        padding: verticalScale(5),
        paddingHorizontal: horizontalScale(10),
        borderRadius: moderateScale(100),
        backgroundColor: 'rgba(0,0,0,0.8)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        height: verticalScale(20),
        aspectRatio: 1,
        transform: [
            {
                rotate: '90deg'
            }
        ]
    }
})

export default Progressor