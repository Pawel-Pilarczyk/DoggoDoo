import { TextInputProps } from 'react-native';

export type InputType = 'text' | 'textField' | 'password' | 'phoneNumber';

export type InputProps = {
    type: InputType;
} & TextInputProps;
