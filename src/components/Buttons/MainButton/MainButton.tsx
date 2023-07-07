import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { COMMON_PALETTE } from '@src/constants/palette';

import Typography from '@src/components/Typography/Typography';

import { MainButtonProps } from './MainButton.types';
import { styles } from './styles';

const MainButton: FC<MainButtonProps> = ({
    customStyles,
    title,
    type = 'filled',
    Icon,
    onPress,
    ...rest
}) => {
    const isFilled = type === 'filled';
    const isOutlined = type === 'outlined';

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.wrapper,
                isFilled && styles.wrapperFilled,
                isOutlined && styles.wrapperOutlined,
                customStyles,
            ]}
            {...rest}>
            {Icon && (
                <Icon
                    fill={
                        isFilled ? COMMON_PALETTE.white : COMMON_PALETTE.black
                    }
                />
            )}
            <Typography
                fontSize={14}
                fontWeight="600"
                color={isFilled ? COMMON_PALETTE.white : COMMON_PALETTE.black}>
                {title}
            </Typography>
        </TouchableOpacity>
    );
};

export default MainButton;
