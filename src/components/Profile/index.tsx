import { FC } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type ProfileProps = {
  name: string;
};

export const Profile: FC<ProfileProps> = ({ name }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileImage} />
      <Text style={styles.profileText}>{name}</Text>
    </View>
  );
};
