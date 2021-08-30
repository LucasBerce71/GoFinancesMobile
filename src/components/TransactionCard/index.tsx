import React from 'react';
import { ITransactionCard } from '../../models/ITransactionCard';

import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from './styles';

export const TransactionCard: React.FC<ITransactionCard> = ({ data }) => {
  return (
      <Container>
          <Title>
              {data.title}
          </Title>

          <Amount type={data.type}>
              {data.type === 'negative' && '- '}
              {data.amount}
          </Amount>

          <Footer>
              <Category>
                  <Icon name={data.category.icon} />
                  <CategoryName>
                      {data.category.name}
                  </CategoryName>
              </Category>

              <Date>
                  {data.date}
              </Date>
          </Footer>
      </Container>
  );
}