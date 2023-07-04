import { View } from 'react-native';
import React, { FC, memo } from 'react';

import LogoIcon from '@src/assets/svg/Logo.svg';
import Typography from '@src/components/Typography';

import { SIZE_CONFIG } from './Logo.config';
import { LogoProps, LogoSize } from './Logo.types';
import { styles } from './styles';
import { scale } from '@src/utils/scale';

const Logo: FC<LogoProps> = ({ size }) => {
    const { fontSize, iconSize } = SIZE_CONFIG[size];
    return (
        <View style={styles.wrapper}>
            <LogoIcon width={scale(iconSize)} height={scale(iconSize)} />
            {size !== LogoSize.SMALL && (
                <Typography fontWeight="900" fontSize={scale(fontSize)}>
                    DoggoDoo
                </Typography>
            )}
        </View>
    );
};

export default memo(Logo);
