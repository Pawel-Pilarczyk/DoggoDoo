import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import Typography from './src/components/Typography/Typography';

function App(): JSX.Element {
    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Typography fontSize={20} fontWeight={'900'} color="red">
                    Hello
                </Typography>
            </ScrollView>
        </SafeAreaView>
    );
}

export default App;
