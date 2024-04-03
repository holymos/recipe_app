import { ArrowRight } from 'lucide-react-native';
import { FC } from 'react';
import { Text, View } from 'react-native';

import { colors } from '@theme/colors';

import styles from './styles';

type SectionHeader = {
  title: string;
};

export const SectionHeader: FC<SectionHeader> = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>

      <View style={styles.headerLinkContainer}>
        <Text style={styles.linkText}>See all</Text>
        <ArrowRight size={14} color={colors.primary[500]} />
      </View>
    </View>
  );
};
