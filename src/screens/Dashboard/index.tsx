import React from 'react';

import { HighLightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import constants from '../../constants';
import { IDataListProps } from '../../models/ITransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGretting,
    Username,
    Icon,
    HighLightCards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton,
} from './styles';

export const Dashboard: React.FC = () => {
    const data: Array<IDataListProps> = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de site",
            amount: "R$ 12.000,00",
            category: {
                name: "Vendas",
                icon: 'dollar-sign',
            },
            date: "13/04/2020",
        },
        {
            id: '2',
            type: 'negative',
            title: "Hamburgueria Pizzy",
            amount: "R$ 59,00",
            category: {
                name: "Alimentação",
                icon: 'coffee',
            },
            date: "10/04/2020",
        },
        {
            id: '3',
            type: 'negative',
            title: "Aluguel do apartamento",
            amount: "R$ 1.200,00",
            category: {
                name: "Casa",
                icon: 'shopping-bag',
            },
            date: "27/03/2020",
        },
    ];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: constants.medias.githubProfile }} />
                        <User>
                            <UserGretting>
                                Olá
                            </UserGretting>

                            <Username>
                                Lucas
                            </Username>
                        </User>
                    </UserInfo>

                    <LogoutButton onPress={() => {}}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserWrapper>
            </Header>

            <HighLightCards>
                <HighLightCard
                    type="up"
                    title="Entradas"
                    amount="R$17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />

                <HighLightCard
                    type="down"
                    title="Saídas"
                    amount="R$1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                />

                <HighLightCard
                    type="total"
                    title="Total"
                    amount="R$16.141,00"
                    lastTransaction="01 à 16 de abril"
                />

            </HighLightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TransactionCard data={item} />
                    )}
                />
            </Transactions>
        </Container>
    );
}