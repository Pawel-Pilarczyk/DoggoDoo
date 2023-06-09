import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { COMMON_PALETTE } from '@src/constants/palette';

import { IconButtonProps } from './IconButton.types';
import { styles } from './styles';

const IconButton: FC<IconButtonProps> = ({
    Icon,
    type,
    onPress,
    customStyles,
    ...rest
}) => {
    const isFilled = type === 'filled';
    const isOutlined = type === 'outlined';

    return (
        <TouchableOpacity
            onPress={onPress}
            {...rest}
            style={[
                styles.wrapper,
                isFilled && styles.wrapperFilled,
                isOutlined && styles.wrapperOutlined,
                customStyles,
            ]}>
            <Icon
                fill={isFilled ? COMMON_PALETTE.white : COMMON_PALETTE.black}
            />
        </TouchableOpacity>
    );
};

export default IconButton;
