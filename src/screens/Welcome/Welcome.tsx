import { View } from 'react-native';
import React, { FC } from 'react';
import Typography from '@src/components/Typography';

const Welcome: FC = () => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Typography>Home Screen</Typography>
        </View>
    );
};

export default Welcome;
