import { StyleSheet } from 'react-native';
import { moderateScale } from '@src/utils/scale';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(33),
    },
});
