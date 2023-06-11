import { StyleSheet } from 'react-native';
import { scale } from '@src/utils/scale';
import { MAIN_PALETTE } from '@src/constants/palette';

export const styles = StyleSheet.create({
    wrapper: {
        width: scale(68),
        height: scale(68),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MAIN_PALETTE.primary,
        borderRadius: scale(39),
    },
});
