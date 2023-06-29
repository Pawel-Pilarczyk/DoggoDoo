import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { PUBLIC_ROUTES } from '@src/constants/routes';
import { PublicStackParamList } from '@src/navigation/PublicNavigator/PublicNavigator.types';

type WelcomeScreenRouteProp = RouteProp<
    PublicStackParamList,
    PUBLIC_ROUTES.WELCOME
>;

type WelcomeScreenNavigationProp = StackNavigationProp<
    PublicStackParamList,
    PUBLIC_ROUTES.WELCOME
>;

export type WelcomeProps = {
    navigation: WelcomeScreenNavigationProp;
    route: WelcomeScreenRouteProp;
};
