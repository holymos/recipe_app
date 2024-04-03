import { StyleSheet } from 'react-native';

import { colors } from '@theme/colors';

const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingTop: 60,
  },

  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral[300],
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },

  searchTextInput: {
    width: '100%',
    height: '100%',
    marginLeft: 12,
  },

  appSectionContainer: {
    marginTop: 20,
  },
});

export default styles;
