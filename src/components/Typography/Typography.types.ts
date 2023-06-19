import { TextProps, TextStyle } from 'react-native';

export type TypographyProps = {
    fontSize?: number;
    fontWeight?:
        | 'normal'
        | 'bold'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
    color?: string;
    textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
} & TextProps;
