import { View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
    cancelAnimation,
    withRepeat,
} from 'react-native-reanimated';
import React, { FC, useEffect } from 'react';

import { styles } from './styles';

const Loader: FC = () => {
    const rotation = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });

    useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 2000,
                easing: Easing.linear,
            }),
            -1,
        );
        return () => cancelAnimation(rotation);
    }, [rotation]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.spinner, animatedStyles]} />
        </View>
    );
};

export default Loader;
