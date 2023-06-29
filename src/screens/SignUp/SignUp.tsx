import React, { FC } from 'react';
import { ImageBackground, View } from 'react-native';

import Typography from '@src/components/Typography';
import Logo from '@src/assets/svg/Logo.svg';

import { SignUpProps } from './SignUp.types';
import { styles } from './styles';

const backgroundImg = require('@src/assets/backgroundImage/bgOnboarding.png');

const SignUp: FC<SignUpProps> = ({ navigation }) => {
    return (
        <ImageBackground source={backgroundImg} style={styles.background}>
            <View style={styles.wrapper}>
                <Logo />
                <Typography>SignUp</Typography>
            </View>
        </ImageBackground>
    );
};

export default SignUp;
