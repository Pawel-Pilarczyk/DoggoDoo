import React, { FC } from 'react';
import { Text } from 'react-native';
import { TypographyProps } from './Typography.types';

const Typography: FC<TypographyProps> = ({
    fontSize,
    fontWeight,
    color,
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
