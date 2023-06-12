import { TextInputProps } from 'react-native';

export type InputType =
    | 'text'
    | 'textField'
    | 'password'
    | 'phoneNumber'
    | 'number';

export type InputProps = {
    type: InputType;
} & TextInputProps;
