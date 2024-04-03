import { StyleSheet } from 'react-native';

import { colors } from '@theme/colors';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    padding: 40,
    paddingBottom: 40,
  },

  newRecipe: {
    marginTop: -80,
    width: 80,
    height: 80,
    backgroundColor: colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
});

export default styles;
