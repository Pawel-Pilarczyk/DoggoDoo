import { StyleSheet } from 'react-native';
import { verticalScale } from '@src/utils/scale';
import { BORDER_PALETTE, MAIN_PALETTE } from '@src/constants/palette';

export const styles = StyleSheet.create({
    wrapper: {
        width: verticalScale(50),
        height: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
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
