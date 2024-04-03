import { StyleSheet } from 'react-native';

import { colors } from '@theme/colors';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.neutral[800],
  },

  headerLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  linkText: {
    marginRight: 4,
    fontSize: 12,
    color: colors.primary[500],
    fontWeight: 'bold',
  },
});

export default styles;
