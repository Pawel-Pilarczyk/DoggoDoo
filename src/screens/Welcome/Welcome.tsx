import { View, Image } from 'react-native';
import React, { FC } from 'react';

import GoogleIcon from '@src/assets/svg/GoogleIcon.svg';
import Loader from '@src/components/Loader/Loader';
import MainButton from '@src/components/Buttons/MainButton';

import { styles } from './styles';

const Welcome: FC = () => {
    return (
        <View style={styles.wrapper}>
            <Image source={require('@src/assets/logo/Logo-96.png')} />
            <MainButton title="123" type="filled" Icon={GoogleIcon} />
            <MainButton title="Outlined" type="outlined" Icon={GoogleIcon} />
            <Loader />
        </View>
    );
};

export default Welcome;
