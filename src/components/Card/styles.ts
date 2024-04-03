import { StyleSheet } from 'react-native';

import { colors } from '@theme/colors';

const styles = StyleSheet.create({
  cardContainer: {
    width: 124,
    marginTop: 20,
    marginRight: 8,
  },

  cardImage: {
    width: 124,
    height: 124,
    borderRadius: 12,
    backgroundColor: colors.neutral[300],
  },

  infoContainer: {
    width: 124,
    paddingHorizontal: 6,
    marginTop: 8,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  author: {
    fontSize: 12,
    color: colors.neutral[400],
    marginTop: 4,
  },
});

export default styles;
