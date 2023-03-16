import { View, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'
import { useSelector } from 'react-redux'

const Details = ({ about, specs }) => {

    const dummy = Array(5).fill(1)
    const { colors } = useSelector(state => state.theme)

    if (specs) {
        delete specs.id
        delete specs.productId
    }

    const renderSpecs = _ => {
        let n = Object.keys(specs).length
        n /= 2
        let obj = {}
        for (let i = 0; i < n; i++) {
            let key = specs['s' + (i + 1)]
            obj[key] = specs['v' + (i + 1)]
        }
        return Object.entries(obj).map(item => (
            <View style={styles.specContainer} key={item[0]}>
                <CustomText color={colors['DARK']} weight='bolder' bottom={5} >{item[0]}</CustomText>
                <CustomText color={colors['DARK']} style={styles.textBody} >{item[1]}</CustomText>
            </View>
        ))
    }

    return (
        <View style={[styles.container,{ backgroundColor: colors['LIGHT'] }]}>
            <View>
                <CustomText weight={'light'} size={14} color={colors['DARK']}>
                    Product Details
                </CustomText>
                <CustomText vertical={20} size={13} color={colors['DARK']}>
                    {about}
                </CustomText>
                {
                    specs && Object.keys(specs).length > 0 && <View style={styles.topContainer}>{renderSpecs()}</View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: horizontalScale(15),
        paddingVertical: verticalScale(10)
    },
    text: {
        marginVertical: verticalScale(5)
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: verticalScale(10)
    },
    specContainer: {
        width: '45%',
        marginBottom: verticalScale(20)
    },
    textBody: {
        borderBottomWidth: moderateScale(1),
        paddingBottom: verticalScale(5),
    },
    topContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
})

export default Details