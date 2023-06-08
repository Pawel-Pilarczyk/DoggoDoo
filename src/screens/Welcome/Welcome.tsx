import { View, Image } from 'react-native';
import React, { FC } from 'react';

import Loader from '@src/components/Loader/Loader';

import { styles } from './styles';

const Welcome: FC = () => {
    return (
        <View style={styles.wrapper}>
            <Image source={require('@src/assets/logo/Logo-96.png')} />
            <Loader />
        </View>
    );
};

export default Welcome;
