import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PUBLIC_ROUTES } from '@src/constants/routes';

import Welcome from '@src/screens/Welcome';
import SignUp from '@src/screens/SignUp';

import { PublicStackParamList } from './PublicNavigator.types';

const PublicNavigator: FC = () => {
    const Stack = createNativeStackNavigator<PublicStackParamList>();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={PUBLIC_ROUTES.WELCOME}
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={PUBLIC_ROUTES.SIGN_UP}
                component={SignUp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default PublicNavigator;
