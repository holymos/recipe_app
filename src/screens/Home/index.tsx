import { SearchIcon } from 'lucide-react-native';
import React from 'react';
import { ScrollView, TextInput, View } from 'react-native';

import { AppSection } from '@components/AppSection';
import { CardLList } from '@components/CardList';
import { CategoriesList } from '@components/CategoriesList';
import { CreatorsList } from '@components/CreatorsList';
import { Title } from '@components/Title';
import { colors } from '@theme/colors';

import styles from './styles';

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Title text="Find best recipes for cooking" />

      <View style={styles.searchContainer}>
        <SearchIcon color={colors.neutral[300]} />
        <TextInput style={styles.searchTextInput} />
      </View>

      <View style={styles.appSectionContainer}>
        <AppSection title="Recent recipes">
          <CardLList />
        </AppSection>
      </View>

      <View style={{ marginTop: 40 }}>
        <AppSection title="Categories" />
        <CategoriesList />
        <CardLList />
      </View>

      <View style={{ marginTop: 40 }}>
        <AppSection title="Creators" />
        <CreatorsList />
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};
