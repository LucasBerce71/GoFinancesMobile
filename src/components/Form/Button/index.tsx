import React from 'react';
import { IButton } from '../../../models/IButton';

import { Container, Title } from './styles';

export const Button: React.FC<IButton> = ({ title, ...rest }) => {
    return (
        <Container {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    );
};