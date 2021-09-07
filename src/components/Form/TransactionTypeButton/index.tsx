import React from 'react';
import { ITransactionTypeButton } from '../../../models/ITransactionTypeButton';

import { 
    Container,
    Icon,
    Title 
} from './styles';

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
};

export const TransactionTypeButton: React.FC<ITransactionTypeButton> = ({
    type,
    title,
    isActive,
    ...rest
}) => {
    return (
        <Container 
            type={type}
            title={title}
            isActive={isActive}
            {...rest}
        >
            <Icon 
                name={icons[type]} 
                type={type}
            />
            <Title>
                {title}
            </Title>
        </Container>
    );
}