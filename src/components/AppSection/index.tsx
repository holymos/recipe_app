import { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import { SectionHeader } from '../SectionHeader';

type AppSectionProps = PropsWithChildren<{
  title: string;
  showSeeAllLink?: boolean;
}>;

export const AppSection: FC<AppSectionProps> = ({ title, children }) => {
  return (
    <View>
      <SectionHeader title={title} />

      <>{children}</>
    </View>
  );
};
