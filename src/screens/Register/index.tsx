import React, { useState, useCallback, useEffect } from 'react';
import {
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { CategorySelect } from '../CategorySelect';

import { CategorySelectButton } from '../../components/Form/CategorySelect';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { InputStateController } from '../../components/Form/InputStateController';
import { Button } from '../../components/Form/Button';

import { IFormData } from '../../models/IFormData';
import { TCategory } from '../../models/types/TCategory';
import ErrorMessages from '../../models/Errors/ErrorMessages';
import YupSchemaForm from '../../models/schemas/YupSchemaForm';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes
} from './styles';
import { TNavigationProps } from '../../models/types/TNavigation';

const schema = Yup.object().shape(YupSchemaForm);

export const Register: React.FC = () => {
    const [transactionType, setTransactionType] = useState<string>('');
    const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);
    const [category, setCategory] = useState<TCategory>({
        key: 'category',
        name: 'Categoria',
    });

    const dataKey = '@gofinances:transactions';

    const {
        control,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });

    const navigation = useNavigation<TNavigationProps>();

    const handleTransactionTypeSelect = useCallback((type: 'up' | 'down') => {
        setTransactionType(type);
    }, []);

    const handleOpenSelectCategoryModal = useCallback(() => {
        setCategoryModalOpen(true);
    }, []);

    const handleCloseSelectCategoryModal = useCallback(() => {
        setCategoryModalOpen(false);
    }, []);

    async function handleRegister(form: IFormData) {
        if (!transactionType) 
            return Alert.alert(
                ErrorMessages.invalidTransactionType.title,
                ErrorMessages.invalidTransactionType.message,
            );

        if (category.key === 'category')
                return Alert.alert(
                    ErrorMessages.invalidTransactionCategory.title,
                    ErrorMessages.invalidTransactionCategory.message,
                );

        const newTransaction = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key,
            date: new Date(),
        };

        try {
            const data = await AsyncStorage.getItem(dataKey);

            const currentData = data ? JSON.parse(data) : [];

            const dataFormatted = [ ...currentData, newTransaction ];

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            reset();
            setTransactionType('');
            setCategory({
                key: 'category',
                name: 'Categoria',
            });

            navigation.navigate('Listagem');
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar!");
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>
                        Cadastro
                    </Title>
                </Header>

                <Form>
                    <Fields>
                        <InputStateController
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />

                        <InputStateController
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType="numeric"
                            error={errors.amount && errors.amount.message}
                        />

                        <TransactionsTypes>
                            <TransactionTypeButton
                                type="up"
                                title="Income"
                                onPress={() => handleTransactionTypeSelect('up')}
                                isActive={transactionType === 'up'}
                            />

                            <TransactionTypeButton
                                type="down"
                                title="Outcome"
                                onPress={() => handleTransactionTypeSelect('down')}
                                isActive={transactionType === 'down'}
                            />
                        </TransactionsTypes>

                        <CategorySelectButton
                            title={category.name}
                            onPress={handleOpenSelectCategoryModal}
                        />
                    </Fields>

                    <Button
                        title="Enviar"
                        onPress={handleSubmit(handleRegister)}
                    />
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    );
};