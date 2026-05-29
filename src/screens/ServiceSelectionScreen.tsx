import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getCategoryById } from '@/data/services';
import { UserHeader } from '@/components';
import colors from '@/theme/Colors';
import SubCategoryCard from '@/components/SubCategoryCard';

const ServiceCategory = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<
    Record<string, number>
  >({});
  const route = useRoute();
  const { categoryId } = route.params as { categoryId: string };
  const selectedCategory = getCategoryById(categoryId);

  const handleSubCategoryQuantityChange = (
    subCategoryId: string,
    quantity: number,
  ) => {
    setSelectedSubCategory(prev => {
      const updated = { ...prev };
      if (quantity === 0) {
        delete updated[subCategoryId];
      } else {
        updated[subCategoryId] = quantity;
      }
      console.log('SubCategory selected:', updated);
      return updated;
    });
  };
  return (
    <View style={styles.container}>
      <UserHeader
        title={selectedCategory?.name}
        location="Kathmandu"
        isSecondary
      />
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 16,
            gap: 16,
          }}
        >
          <Image
            source={{ uri: selectedCategory?.image }}
            style={styles.image}
          />

          {selectedCategory?.subCategories?.map(subCategory => (
            <SubCategoryCard
              key={subCategory.id}
              subCategory={subCategory}
              quantity={selectedSubCategory[subCategory.id] || 0}
              onQuantityChange={quantity =>
                handleSubCategoryQuantityChange(subCategory.id, quantity)
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default ServiceCategory;
