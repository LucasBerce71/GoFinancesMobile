import { TouchableOpacity } from 'react-native';

import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { ITransactionTypeButton } from '../../../models/ITransactionTypeButton';
import { TIcon } from '../../../models/types/TIcon';

export const Container = styled(TouchableOpacity)<ITransactionTypeButton>`
    width: 48%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${({ theme }) => theme.colors.text};

    border-radius: 5px;

    padding: 16px;

    ${({ isActive, type }) => isActive && type === 'up' && css`
        background-color: ${({ theme }) => theme.colors.success_light};
        border: none;
    `};

    ${({ isActive, type }) => isActive && type === 'down' && css`
        background-color: ${({ theme }) => theme.colors.danger_light};
        border: none;
    `};
`;

export const Icon = styled(Feather)<TIcon>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${({ theme, type }) => type === 'up' 
        ? theme.colors.success
        : theme.colors.danger
    }
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;