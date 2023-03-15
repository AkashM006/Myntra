import { View, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import Quote from '../Reusable/Quote'
import { moderateScale, verticalScale } from '../../utils/Metrics'
import { useSelector } from 'react-redux'

const ListFooter = ({ count, maxCount }) => {

    const {colors} = useSelector(state => state.theme)

    return (
        <View style={styles.container}>
            {count < maxCount &&
                <View>
                    <ActivityIndicator style={styles.loader} size={'small'} color={colors['PRIMARY']} />
                </View>
            }
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
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: moderateScale(100)
    }
})

export default ListFooter