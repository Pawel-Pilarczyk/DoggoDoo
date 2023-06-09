import { SvgProps } from 'react-native-svg';
import { TouchableOpacityProps, ViewStyle } from 'react-native/types';

export type ButtonType = 'filled' | 'outlined';

export type IconButtonProps = {
    Icon: React.FC<SvgProps>;
    type: ButtonType;
    customStyles?: ViewStyle;
    onPress?: () => void;
} & TouchableOpacityProps;
