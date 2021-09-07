import React from 'react';

import { Controller } from 'react-hook-form';

import { Input } from '../Input';

import { Container, Error } from './styles';

import { IInputStateController } from '../../../models/IInputStateController';

export const InputStateController: React.FC<IInputStateController> = ({
    control,
    name,
    error,
    ...rest
}) => {
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
            
            { error && <Error>{error}</Error> }
        </Container>
    );
}