import { FC } from 'react';
import { ScrollView } from 'react-native';

import { Card } from '../Card';

export const CardLList: FC = () => {
  const cards = Array.from({ length: 5 });

  return cards.length ? (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginRight: -22 }}
    >
      {cards.map((_, index) => (
        <Card key={index} />
      ))}
    </ScrollView>
  ) : null;
};
