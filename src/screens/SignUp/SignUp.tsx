import React, { FC } from 'react';
import { TouchableOpacity, ImageBackground, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

import { scale } from '@src/utils/scale';

import Input from '@src/components/Input/Input';
import Typography from '@src/components/Typography';
import Logo, { LogoSize } from '@src/components/Logo';

import { SignUpProps, FieldValues, FieldNames } from './SignUp.types';
import { styles } from './styles';
import MainButton from '@src/components/Buttons/MainButton/MainButton';
import { MAIN_PALETTE } from '@src/constants/palette';
import { PUBLIC_ROUTES } from '@src/constants/routes';

const backgroundImg = require('@src/assets/backgroundImage/bgOnboarding.png');

const SignUp: FC<SignUpProps> = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FieldValues>();

    const handleSignUp = handleSubmit(
        ({ confirmPassword, email, password }) => {
            console.log({ confirmPassword, email, password });
        },
    );

    const handleNavigateToSignIn = () => {
        navigation.navigate(PUBLIC_ROUTES.SIGN_UP);
    };

    return (
        <ImageBackground source={backgroundImg} style={styles.background}>
            <View style={styles.wrapper}>
                <Logo size={LogoSize.LARGE} />
                <View style={styles.signUpText}>
                    <Typography fontSize={scale(30)} fontWeight="900">
                        Sign Up
                    </Typography>
                </View>
                <Controller
                    name={FieldNames.EMAIL}
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <Input
                            value={value}
                            onChange={e => onChange(e.nativeEvent.text)}
                            onBlur={onBlur}
                            type="text"
                            placeholder="Email"
                        />
                    )}
                />
                <Controller
                    name={FieldNames.PASSWORD}
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <Input
                            value={value}
                            type="password"
                            placeholder="Password"
                            onBlur={onBlur}
                            onChange={e => onChange(e.nativeEvent.text)}
                        />
                    )}
                />
                <Controller
                    name={FieldNames.CONFIRM_PASSWORD}
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <Input
                            value={value}
                            type="password"
                            placeholder="Confirm Password"
                            onChange={e => onChange(e.nativeEvent.text)}
                            onBlur={onBlur}
                        />
                    )}
                />
                <MainButton
                    title="Sign Up"
                    type="filled"
                    onPress={handleSignUp}
                />
                <View style={styles.signInTextWrapper}>
                    <Typography color={MAIN_PALETTE.secondaryLight}>
                        Already have account?
                    </Typography>
                    <TouchableOpacity onPress={handleNavigateToSignIn}>
                        <Typography color={MAIN_PALETTE.primary}>
                            Sign In
                        </Typography>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default SignUp;
