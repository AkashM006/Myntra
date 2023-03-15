import { Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { horizontalScale } from '../../utils/Metrics'

const Skeleton = ({ height, width, borderRadius, aspectRatio }) => {

    let opacity = useRef(new Animated.Value(0.3))

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 500,
                }),
                Animated.timing(opacity.current, {
                    toValue: 0.3,
                    useNativeDriver: true,
                    duration: 800,
                })
            ])
        ).start()
    }, [])

    const styles = {
        height,
        borderRadius,
        backgroundColor: 'lightgray',
        marginRight: horizontalScale(6),
    }

    if(width)styles.width = width
    else styles.aspectRatio = aspectRatio

    return (
        <Animated.View style={[styles,{opacity: opacity.current,}]} />
    )
}

export default Skeleton