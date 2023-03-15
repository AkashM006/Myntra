import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import { kFormatter } from '../../utils/utils'
import ICONS from '../../icons/icons'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'

const Rating = ({ count, total, align, rating }) => {

    const alignment = {
        left: { left: horizontalScale(10) },
        right: { right: horizontalScale(10) },
    }

    let currentAlignment = align ?? 'left'

    return (
        <View style={[styles.container, alignment[currentAlignment]]}>
            <CustomText weight={'light'}>
                {rating ? rating : (total / count).toFixed(1)}
            </CustomText>
            <Image tintColor={'#259f23'} source={{ uri: ICONS.ICON_STAR }} style={styles.star} />
            <View style={styles.separator} />
            <CustomText weight={'light'} style={styles.count}>
                {kFormatter(+count)}
            </CustomText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 4,
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: '5%',
        paddingVertical: '2%',
        bottom: verticalScale(10),
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    star: {
        height: verticalScale(8),
        aspectRatio: 1,
        marginLeft: horizontalScale(2),
        marginRight: horizontalScale(5),
    },
    separator: {
        height: verticalScale(10),
        borderRightWidth: moderateScale(1),
        borderColor: '#909090'
    },
    count: { marginLeft: horizontalScale(5) }
})

export default Rating