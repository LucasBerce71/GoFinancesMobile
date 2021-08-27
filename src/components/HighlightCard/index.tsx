import React from 'react';
import { View } from 'react-native';
import { IHighlightCard } from '../../models/IHighLightCard';

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

export const HighLightCard: React.FC<IHighlightCard> = ({ 
  type, 
  title, 
  amount, 
  lastTransaction 
}) => {

  const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
  }

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>
          {title}
        </Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
      <Amount type={type}>
        {amount}
      </Amount>

      <LastTransaction type={type}>
        {lastTransaction}
      </LastTransaction>
      </Footer>

    </Container>
  );
}