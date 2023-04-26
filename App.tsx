import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigation/MainNavigator';

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}

export default App;
