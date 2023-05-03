import { View } from 'react-native';
import React, { FC } from 'react';

import Logo from '@src/assets/logo/DoggoDoo-logos_black.svg';

import { styles } from './styles';

const Welcome: FC = () => {
    return (
        <View style={styles.wrapper}>
            <Logo width={'240px'} height={'240px'} />
        </View>
    );
};

export default Welcome;
