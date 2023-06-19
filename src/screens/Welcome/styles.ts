import { verticalScale, moderateScale } from '@src/utils/scale';
import { StyleSheet } from 'react-native';
// import { scale, verticalScale } from '@src/utils/scale';

export const styles = StyleSheet.create({
    wrapper: {
        height: '100vh',
        flex: 1,
        justifyContent: 'space-between',
    },
    textWrapper: {
        paddingTop: verticalScale(129),
        paddingHorizontal: moderateScale(20),
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: verticalScale(30),
    },
    sectionWrapper: {
        height: '45%',
        width: '100%',
        alignItems: 'flex-end',
    },
    sectionWrapperCentered: {
        alignItems: 'center',
    },
    img: {
        height: '100%',
        resizeMode: 'stretch',
    },
});
