import { BORDER_PALETTE } from '@src/constants/palette';
import { moderateScale, scale, verticalScale } from '@src/utils/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        borderRadius: verticalScale(15),
        borderWidth: 1,
        borderColor: BORDER_PALETTE.GREY_LIGHT,
        paddingHorizontal: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInput: {
        fontSize: scale(14),
        width: '100%',
    },
    passwordInput: {
        width: '80%',
    },
});
