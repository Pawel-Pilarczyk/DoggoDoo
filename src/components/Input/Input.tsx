import React, { FC, useState, useMemo } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';

import EyeIcon from '@src/assets/svg/EyeIcon.svg';
import EyeCrossedIcon from '@src/assets/svg/EyeCrossedIcon.svg';

import { getKeyboardOption } from './Input.utils';
import { InputProps } from './Input.types';
import { styles } from './styles';
import { scale } from '@src/utils/scale';

const Input: FC<InputProps> = ({ type, style, ...rest }) => {
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    const isTextArea = type === 'textField';
    const isPassword = type === 'password';
    const isPasswordHidden = isPassword && isPasswordSecure;

    const numberOfLines = isTextArea ? 4 : 1;

    const keyboardType = useMemo(() => getKeyboardOption(type), [type]);

    const handleTogglePasswordVisible = () => {
        setIsPasswordSecure(v => !v);
    };

    return (
        <View style={[styles.wrapper, style]}>
            <TextInput
                {...rest}
                style={[styles.textInput, isPassword && styles.passwordInput]}
                secureTextEntry={isPasswordHidden}
                numberOfLines={numberOfLines}
                multiline={isTextArea}
                keyboardType={keyboardType}
            />
            {isPassword && (
                <TouchableOpacity onPress={handleTogglePasswordVisible}>
                    {isPasswordSecure ? (
                        <EyeIcon
                            fill={'black'}
                            height={scale(20)}
                            width={scale(20)}
                        />
                    ) : (
                        <EyeCrossedIcon height={scale(20)} width={scale(20)} />
                    )}
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Input;
