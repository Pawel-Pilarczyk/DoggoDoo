import { ImageSourcePropType } from 'react-native/types';

const imgOne = require('@src/assets/png/onboarding/dog1.png');
const imgTwo = require('@src/assets/png/onboarding/dog2.png');
const imgThree = require('@src/assets/png/onboarding/swipe.png');
const imgFour = require('@src/assets/png/onboarding/map.png');

export type ScreenData = {
    title: string;
    text: string;
    img: ImageSourcePropType;
};

export const SCREEN_DATA: ScreenData[] = [
    {
        img: imgOne,
        title: 'Let’s do something together',
        text: 'Meet local dogs and dog lovers for friendship, play-dates or fun outdoor playing.',
    },
    {
        img: imgTwo,
        title: 'Find Friend 4Live!',
        text: 'Meet local dogs and dog lovers for friendship, play-dates or fun outdoor playing.',
    },
    {
        img: imgThree,
        title: 'User intuitive interface',
        text: 'Meet local dogs and dog lovers for friendship, play-dates or fun outdoor playing.',
    },
    {
        img: imgFour,
        title: 'Let’s do something together',
        text: 'Meet local dogs and dog lovers for friendship, play-dates or fun outdoor playing.',
    },
];
