import React from 'react';

import { TInput } from '../../../models/types/TInput';

import { Container } from './styles';

export const Input: React.FC<TInput> = ({ ...rest }) => {
    return (
        <Container {...rest} />
    );
}