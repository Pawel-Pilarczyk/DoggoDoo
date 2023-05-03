import { View } from 'react-native';
import React, { FC } from 'react';

import Logo from '@src/assets/logo/DoggoDoo-logos_black.svg';
import Loader from '@src/components/Loader/Loader';

import { styles } from './styles';

const Welcome: FC = () => {
    return (
        <View style={styles.wrapper}>
            <Logo width={'240px'} height={'240px'} />
            <Loader />
        </View>
    );
};

export default Welcome;
