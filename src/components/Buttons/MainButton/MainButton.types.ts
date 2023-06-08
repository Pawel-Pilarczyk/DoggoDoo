import { SvgProps } from 'react-native-svg';
import { ViewStyle } from 'react-native/types';

export type ButtonType = 'filled' | 'outlined';

export type MainButtonProps = {
    title: string;
    type: ButtonType;
    Icon?: React.FC<SvgProps>;
    customStyles?: ViewStyle;
    onPress?: () => void;
};
