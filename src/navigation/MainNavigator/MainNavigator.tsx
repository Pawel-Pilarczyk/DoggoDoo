import React, { FC } from 'react';

import PrivateNavigator from '../PrivateNavigator';
import PublicNavigator from '../PublicNavigator';

const MainNavigator: FC = () => {
    const isUserLoggedIn = false;

    return isUserLoggedIn ? <PrivateNavigator /> : <PublicNavigator />;
};

export default MainNavigator;
