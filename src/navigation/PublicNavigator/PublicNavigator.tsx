import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '@src/screens/Welcome';

type PrivateStackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const PrivateNavigator: FC = () => {
    const Stack = createNativeStackNavigator<PrivateStackParamList>();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default PrivateNavigator;
