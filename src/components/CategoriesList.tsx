import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import colors from '@/theme/Colors';
import CategoryButton from './CategoryButton';

export interface Category {
  id: string;
  icon: string;
  name: string;
}

interface CategoriesListProps {
  categories: Category[];
  onCategoryPress?: (category: Category) => void;
  onSeeAllPress?: () => void;
  containerStyle?: ViewStyle;
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  categories,
  onCategoryPress,
  onSeeAllPress,
  containerStyle,
}) => {
  const handlePress = (category: Category) => {
    onCategoryPress?.(category);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map(category => (
          <CategoryButton
            key={category.id}
            icon={category.icon}
            label={category.name}
            onPress={() => handlePress(category)}
            containerStyle={styles.categoryButton}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors['on-surface'],
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.secondary,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryButton: {
    width: 70,
  },
});

export default CategoriesList;
