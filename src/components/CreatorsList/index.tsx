import { FC } from 'react';
import { ScrollView } from 'react-native';

import { Profile } from '../Profile';
import styles from './styles';

export const CreatorsList: FC = () => {
  const creators = [
    { name: 'Moisés', imageUrl: '' },
    { name: 'Amanda', imageUrl: '' },
    { name: 'Bonniellen', imageUrl: '' },
    { name: 'Gorducho', imageUrl: '' },
    { name: 'Fubens', imageUrl: '' },
  ];

  return (
    <ScrollView
      horizontal
      style={{ marginRight: -22 }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.creatorListContainer}
    >
      {creators.map((creator) => (
        <Profile key={creator.name} name={creator.name} />
      ))}
    </ScrollView>
  );
};
