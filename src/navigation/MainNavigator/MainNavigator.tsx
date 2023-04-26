import React, { FC } from 'react';

import PrivateNavigator from '@src/navigation/PrivateNavigator';
import PublicNavigator from '@src/navigation/PublicNavigator';

const MainNavigator: FC = () => {
    const isUserLoggedIn = false;

    return isUserLoggedIn ? <PrivateNavigator /> : <PublicNavigator />;
};

export default MainNavigator;
