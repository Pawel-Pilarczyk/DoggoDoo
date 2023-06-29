import React, { FC, useState } from 'react';
import { View, Image, ImageBackground } from 'react-native';

import { scale } from '@src/utils/scale';
import { PUBLIC_ROUTES } from '@src/constants/routes';

import Typography from '@src/components/Typography';
import ProgressButton from '@src/components/Buttons/ProgressButton';

import { SCREEN_DATA } from './Welcome.config';
import { WelcomeProps } from './Welcome.types';
import { styles } from './styles';

const backgroundImg = require('@src/assets/backgroundImage/bgOnboarding.png');

const NUMBER_OF_STEPS = 4;

const Welcome: FC<WelcomeProps> = ({ navigation }) => {
    const [progress, setProgress] = useState(1);

    const { img, text, title } = SCREEN_DATA[progress - 1];

    const handleSetNextStep = () => {
        if (progress === NUMBER_OF_STEPS) {
            navigation.navigate(PUBLIC_ROUTES.SIGN_UP);
        }
        setProgress(v => (v === NUMBER_OF_STEPS ? NUMBER_OF_STEPS : ++v));
    };

    return (
        <ImageBackground source={backgroundImg} style={styles.wrapper}>
            <View style={styles.textWrapper}>
                <View>
                    <Typography
                        fontSize={scale(30)}
                        fontWeight="600"
                        textAlign="center">
                        {title}
                    </Typography>
                    <Typography
                        fontSize={scale(13)}
                        fontWeight="400"
                        textAlign="center">
                        {text}
                    </Typography>
                </View>
                <ProgressButton
                    activeStep={progress}
                    steps={NUMBER_OF_STEPS}
                    onPress={handleSetNextStep}
                />
            </View>
            <View
                style={[
                    styles.sectionWrapper,
                    progress > 2 && styles.sectionWrapperCentered,
                ]}>
                <Image source={img} style={styles.img} />
            </View>
        </ImageBackground>
    );
};

export default Welcome;
