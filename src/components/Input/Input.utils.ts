import { KeyboardTypeOptions } from 'react-native/types';
import { InputType } from './Input.types';
export const getKeyboardOption = (type: InputType): KeyboardTypeOptions => {
    switch (type) {
        case 'phoneNumber':
            return 'phone-pad';
        case 'number':
            return 'number-pad';
        default:
            return 'default';
    }
};
