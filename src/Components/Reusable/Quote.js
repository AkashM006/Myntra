import { View, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../Reusable/CustomText'
import { useSelector } from 'react-redux'
import { horizontalScale, verticalScale } from '../../utils/Metrics'

const Quote = ({ loading }) => {

    const {colors} = useSelector(state => state.theme)

    return (
        <>
            {loading === false && <View style={styles.container}>
                <View style={[styles.line,{backgroundColor: colors['DARK']}]} />
                <CustomText color={colors['DARK']} > 
                    "Dressing well Is A Form Of Good Manners."
                </CustomText>
                <CustomText color={colors['SHADEDARK']} style={{ alignSelf: 'center', }}>
                    Muiccia Prada
                </CustomText>
            </View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: verticalScale(10),
        alignSelf: 'center',
    },
    line: {
        width: horizontalScale(90),
        height: verticalScale(1),
        marginBottom: verticalScale(15),
        alignSelf: 'center',
    }
})

export default Quote