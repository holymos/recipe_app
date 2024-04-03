import { FC } from 'react';
import { Text } from 'react-native';

import styles from './tsyles';

type TitleProps = {
  text: string;
};

export const Title: FC<TitleProps> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};
