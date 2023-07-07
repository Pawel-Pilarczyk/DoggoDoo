import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '@src/utils/scale';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(33),
        gap: verticalScale(30),
    },
    signUpText: {
        marginVertical: verticalScale(40),
    },
    signInTextWrapper: {
        flexDirection: 'row',
        gap: moderateScale(8),
        marginTop: verticalScale(40),
    },
});
