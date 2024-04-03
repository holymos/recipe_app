import { StyleSheet } from 'react-native';

import { colors } from '@theme/colors';

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginRight: 20,
  },

  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 999,
    backgroundColor: colors.neutral[300],
  },

  profileText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
