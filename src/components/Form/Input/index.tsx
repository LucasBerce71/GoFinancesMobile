import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

type TProps = TextInputProps;

export const Input: React.FC<TProps> = ({ ...rest }) => {
    return (
        <Container {...rest} />
    );
}