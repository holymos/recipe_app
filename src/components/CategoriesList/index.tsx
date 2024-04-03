import { FC, useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import { colors } from '@theme/colors';

export const CategoriesList: FC = () => {
  const categories = ['Salad', 'Breakfast', 'Appetizer', 'Noodle', 'Dessert'];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectCategory = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20, marginRight: -22 }}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          onPress={() => handleSelectCategory(index)}
          key={index}
          style={{
            padding: 8,
            paddingHorizontal: 16,
            backgroundColor:
              selectedIndex === index ? colors.primary[500] : 'transparent',
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color:
                selectedIndex === index
                  ? colors.neutral[100]
                  : colors.primary[300],
              fontWeight: 'bold',
              fontSize: 14,
            }}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
