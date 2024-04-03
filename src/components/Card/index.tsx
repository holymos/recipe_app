import { Text, View } from 'react-native';

import styles from './styles';

export const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Indonesian chicken burger</Text>
        <Text style={styles.author}>By Adrianna Curl</Text>
      </View>
    </View>
  );
};
