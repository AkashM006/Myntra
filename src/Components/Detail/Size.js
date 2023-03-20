import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import { useSelector } from 'react-redux'
import { formatCurrency, getSizes } from '../../utils/utils'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'

const Size = ({ sizes, setStickyFooter, size, setSize, setSizeContainer }) => {
    let clothSizes = { ...sizes }

    delete clothSizes.id
    delete clothSizes.productId

    const { colors } = useSelector(state => state.theme)
    const COLORS = colors

    const item = { size: clothSizes }

    clothSizes = getSizes(item)

    const getColor = item => item.available ? item.name === size ? COLORS.PRIMARY : COLORS.DARK : COLORS.SHADEDARK

    const getWeight = item => item.available && item.name === size ? 'bolder' : ''

    return (
        <View onLayout={event => { setStickyFooter(event.nativeEvent.layout) }} style={[styles.container,{ backgroundColor: colors['LIGHT'] }]}>
            <View style={styles.titleContainer}>
                <CustomText color={colors['DARK']} weight={'light'} size={18}>
                    Select Size
                </CustomText>
                <TouchableOpacity>
                    <CustomText weight={'light'} size={14} color={COLORS.PRIMARY}>
                        Size chart
                    </CustomText>
                </TouchableOpacity>
            </View>
            <ScrollView onLayout={event => setSizeContainer(event.nativeEvent.layout)} showsHorizontalScrollIndicator={false} horizontal style={styles.sizesContainer}>
                {clothSizes.map(item => (
                    <View style={styles.sizeInnerContainer} key={item.name}>
                        <TouchableOpacity disabled={!item.available} onPress={() => setSize(item.name)} style={[styles.size, {
                            borderColor: getColor(item)
                        }]}>
                            <View>
                                <CustomText weight={getWeight(item)} color={getColor(item)}>
                                    {item.name}
                                </CustomText>
                            </View>
                            {!item.available && <View style={[styles.strike,{ borderColor: colors['SHADEDARK'] }]} />}
                            {
                                !clothSizes.hasSameAmount && item.available && <CustomText color={getColor(item)}>
                                    {formatCurrency(item.amount).split('.')[0]}
                                </CustomText>
                            }
                        </TouchableOpacity>
                        {item.available && item.maxQty <= 5 && <CustomText weight='bold' style={[{ borderColor: colors['DANGER'] }, styles.dangerText]} color={colors['DANGER']}>
                            {item.maxQty} left
                        </CustomText>}
                    </View>
                ))}
            </ScrollView>
            {/* <View style={styles.buttonContainer} /> */}
                {/* <TouchableOpacity style={[styles.button, { borderColor: 'lightgray', borderWidth: 1, width: '40%' }]}>
                    <FastImage source={{ uri: ICONS.ICON_HEART }} style={styles.icon} />
                    <CustomText weight={'light'} style={[styles.text]}>
                        WISHLIST
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity onPress={addToBag} style={[styles.button, { backgroundColor: '#ff3e6c', width: '50%' }]}>
                    <FastImage source={{ uri: ICONS.ICON_BAG }} tintColor='white' style={[styles.icon, { tintColor: 'white' }]} />
                    <CustomText weight={'light'} color={COLORS.WHITE} style={[styles.text,]}>
                        ADD TO BAG
                    </CustomText>
                </TouchableOpacity> */}
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
        paddingVertical: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sizesContainer: {
        flexDirection: 'row',
    },
    size: {
        borderRadius: moderateScale(100),
        borderWidth: moderateScale(1),
        height: verticalScale(50),
        paddingHorizontal: verticalScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: horizontalScale(5),
        marginVertical: verticalScale(10)
    },
    strike: {
        height: verticalScale(1),
        borderTopWidth: moderateScale(1),
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
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
        aspectRatio: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: verticalScale(10),
        paddingHorizontal: horizontalScale(10),
        height: verticalScale(50),
        margin: verticalScale(10),
        marginHorizontal: horizontalScale(10)
    },
    text: { marginLeft: horizontalScale(10) },
    sizeInnerContainer: {
        alignItems: 'center',
    },
    dangerText: {
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        padding: horizontalScale(4),
        paddingVertical: verticalScale(4)
    }
})

export default Size