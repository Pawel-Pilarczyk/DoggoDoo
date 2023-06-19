import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { scale } from '@src/utils/scale';
import { getPrecentValue } from '@src/utils/numbers';
import { COMMON_PALETTE, MAIN_PALETTE } from '@src/constants/palette';

import ArrowRightIcon from '@src/assets/svg/ArrowRightIcon.svg';

import { ProgressButtonProps } from './ProgressButton.types';
import { styles } from './styles';

const ProgressButton: FC<ProgressButtonProps> = ({
    activeStep,
    steps,
    onPress,
}) => {
    const progressValue = getPrecentValue(activeStep, steps);

    return (
        <AnimatedCircularProgress
            fill={progressValue}
            size={scale(92)}
            width={scale(5)}
            tintColor={MAIN_PALETTE.grey}
            rotation={0}>
            {() => (
                <TouchableOpacity style={styles.wrapper} onPress={onPress}>
                    <ArrowRightIcon fill={COMMON_PALETTE.white} />
                </TouchableOpacity>
            )}
        </AnimatedCircularProgress>
    );
};

export default ProgressButton;
