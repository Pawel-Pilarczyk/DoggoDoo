import React, { FC } from 'react';
import { Text } from 'react-native';
import { TypographyProps } from './Typography.types';
import { COMMON_PALETTE } from '@src/constants/palette';

const Typography: FC<TypographyProps> = ({
    fontSize,
    fontWeight,
    color = COMMON_PALETTE.black,
    children,
    ...rest
}) => {
    return (
        <Text {...rest} style={{ fontSize, fontWeight, color }}>
            {children}
        </Text>
    );
};

export default Typography;
