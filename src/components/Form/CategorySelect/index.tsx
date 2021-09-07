import React from 'react';
import { ICategorySelect } from '../../../models/ICategorySelect';

import { 
    Container,
    Category,
    Icon, 
} from './styles';

export const CategorySelectButton: React.FC<ICategorySelect> = ({ title, onPress }) => {
    return (
        <Container onPress={onPress}>
            <Category>
                {title}
            </Category>

            <Icon name="chevron-down" />
        </Container>
    );
};