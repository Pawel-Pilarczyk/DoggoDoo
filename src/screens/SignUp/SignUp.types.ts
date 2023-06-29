import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { PUBLIC_ROUTES } from '@src/constants/routes';
import { PublicStackParamList } from '@src/navigation/PublicNavigator/PublicNavigator.types';

type SignUpScreenRouteProp = RouteProp<
    PublicStackParamList,
    PUBLIC_ROUTES.SIGN_UP
>;

type SignUpScreenNavigationProp = StackNavigationProp<
    PublicStackParamList,
    PUBLIC_ROUTES.SIGN_UP
>;

export type SignUpProps = {
    navigation: SignUpScreenNavigationProp;
    route: SignUpScreenRouteProp;
};
