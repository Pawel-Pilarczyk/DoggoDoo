import React, { FC, useState } from 'react';
import { View, Image } from 'react-native';

import ProgressButton from '@src/components/Buttons/ProgressButton';
import Input from '@src/components/Input';

import { styles } from './styles';

const NUMBER_OF_STEPS = 4;

const Welcome: FC = () => {
    const [progress, setProgress] = useState(1);

    const handleSetNextStep = () => {
        setProgress(v => (v === NUMBER_OF_STEPS ? NUMBER_OF_STEPS : ++v));
    };
    return (
        <View style={styles.wrapper}>
            <Image source={require('@src/assets/logo/Logo-96.png')} />

            <ProgressButton
                activeStep={progress}
                steps={NUMBER_OF_STEPS}
                onPress={handleSetNextStep}
            />
            <Input type="number" />
        </View>
    );
};

export default Welcome;
