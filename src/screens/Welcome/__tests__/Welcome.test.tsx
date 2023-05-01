import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Welcome from '../Welcome';

test('Should render correctly', () => {
    render(<Welcome />);
    const typography = screen.getAllByText('Welcome Screen');
    expect(typography).toBeTruthy();
});
