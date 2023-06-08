import { StyleSheet } from 'react-native';
import { scale } from '@src/utils/scale';
import { MAIN_PALETTE } from '@src/constants/palette';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        height: scale(60),
        width: scale(60),
        borderRadius: scale(30),
        borderWidth: scale(7),
        borderTopColor: '#f5f5f5',
        borderRightColor: '#f5f5f5',
        borderBottomColor: '#f5f5f5',
        borderLeftColor: MAIN_PALETTE.primary,
    },
});
