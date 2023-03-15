import { Text } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { useSelector } from 'react-redux'
import { horizontalScale, moderateScale, verticalScale } from '../../utils/Metrics'

const CustomText = ({ children, fontFamily, style, weight, isAnimated, size, color, top, bottom, left, right, vertical, horizontal, align, strike, ...props }) => {

    const { colors } = useSelector(state => state.theme)

    const weightList = {
        light: '700',
        bold: '800',
        bolder: '900',
        undefined: '300'
    }

    const styles = {
        fontFamily: fontFamily ?? 'Assistant-Regular',
        fontWeight: weightList[weight],
        fontSize: size ? moderateScale(size) : moderateScale(12),
        color: color ?? 'black',
        textAlign: align,
        textDecorationLine: strike ? 'line-through' : 'none'
    }

    if (left) styles['marginLeft'] = horizontalScale(left)
    if (right) styles['marginRight'] = horizontalScale(right)
    if (bottom) styles['marginBottom'] = verticalScale(bottom)
    if (top) styles['marginTop'] = verticalScale(top)
    if (vertical) styles['marginVertical'] = verticalScale(vertical)
    if (horizontal) styles['marginHorizontal'] = horizontalScale(horizontal)

    if (isAnimated && isAnimated === true)
        return (<Animated.Text {...props} style={[styles, style]}>{children}</Animated.Text>)

    return (<Text {...props} style={[styles, style]}>{children}</Text>)
}

export default CustomText