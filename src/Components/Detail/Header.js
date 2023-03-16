import { View, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import { calculateDiscount, formatCurrency } from '../../utils/utils'
import { horizontalScale, verticalScale } from '../../utils/Metrics'
import { useSelector } from 'react-redux'

const Header = ({ brand, name, price, discount }) => {

    const hasDiscount = discount === null ? false : true

    const {colors} = useSelector(state => state.theme)
    const COLORS = colors

    const priceStyle = {
        true: {
            textDecorationLine: 'line-through',
            color: COLORS.SHADEDARK
        },
        false: {
            fontWeight: '800',
            color: COLORS.SHADELIGHT
        }
    }

    return (
        <View style={[styles.container,{ backgroundColor: colors['LIGHT'] }]}>
            <View style={styles.titleContainer}>
                <CustomText color={colors['DARK']} weight={'bold'} size={16}>
                    {brand}
                    <CustomText color={COLORS.SHADEDARK}>
                        {' ' + name}
                    </CustomText>
                </CustomText>
            </View>
            <View>
                <View style={styles.priceContainer}>
                    {hasDiscount && <CustomText color={COLORS.SHADEDARK} style={{ marginRight: 5 }}>
                        MRP
                    </CustomText>}
                    <CustomText size={14} style={[styles.price, priceStyle[hasDiscount]]}>
                        {formatCurrency(price).split('.')[0]}
                    </CustomText>
                    {hasDiscount && <CustomText color={COLORS['DARK']} weight={'light'} style={styles.discountedPrice}>
                        {formatCurrency(+calculateDiscount(price, discount)).split('.')[0]}
                    </CustomText>}
                    {hasDiscount && <CustomText color={COLORS.PRIMARY} style={styles.discount}>
                        ({discount}% OFF)
                    </CustomText>}
                </View>
                <CustomText color={COLORS.SHADEDARK} style={styles.info}>
                    Inclusive of all taxes
                </CustomText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: horizontalScale(15),
        paddingBottom: verticalScale(10),
        marginBottom: verticalScale(10)
    },
    titleContainer: {
        width: '70%',
        flexDirection: 'row'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    price: { marginTop: verticalScale(2) },
    info: { marginVertical: verticalScale(2) },
    discountedPrice: { marginLeft: horizontalScale(5), },
    discount: { marginLeft: horizontalScale(5), },
})

export default Header