import { View, StyleSheet } from 'react-native'
import React from 'react'
import Quote from '../Reusable/Quote'
import { moderateScale, verticalScale } from '../../utils/Metrics'
import CustomLoader from '../Reusable/CustomLoader'

const ListFooter = ({ count, maxCount }) => {

    return (
        <View style={styles.container}>
            { count < maxCount && <CustomLoader /> }
            <Quote loading={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: verticalScale(10),
        height: verticalScale(115)
    },
    loader: {
        padding: '2%',
        alignSelf: 'center',
        borderRadius: moderateScale(100)
    }
})

export default ListFooter