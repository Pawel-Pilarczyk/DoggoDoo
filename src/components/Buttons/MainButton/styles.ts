import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '@src/utils/scale';
import { BORDER_PALETTE, MAIN_PALETTE } from '@src/constants/palette';

export const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: verticalScale(50),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: moderateScale(14),
        borderRadius: verticalScale(15),
    },
    wrapperFilled: {
        backgroundColor: MAIN_PALETTE.primary,
    },
    wrapperOutlined: {
        borderColor: BORDER_PALETTE.GREY_LIGHT,
        borderWidth: 1,
    },
});
