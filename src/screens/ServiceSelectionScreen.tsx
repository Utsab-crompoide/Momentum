import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { getCategoryById } from '@/data/services';
import { UserHeader } from '@/components';
import colors from '@/theme/Colors';
import SubCategoryCard from '@/components/SubCategoryCard';
import Icon from 'react-native-vector-icons/Ionicons';

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

  const { totalItems, totalPrice } = useMemo(() => {
    let count = 0;
    let price = 0;

    selectedCategory?.subCategories?.forEach(subCategory => {
      const quantity = selectedSubCategory[subCategory.id] || 0;
      if (quantity > 0) {
        count += quantity;
        price += quantity * subCategory.startingPrice;
      }
    });

    return { totalItems: count, totalPrice: price };
  }, [selectedSubCategory, selectedCategory]);

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
          <View
            style={{
              backgroundColor: 'rgba(182, 237, 194, 0.3)',
              padding: 12,
              borderWidth: 1,
              borderColor: colors['secondary-fixed-dim'],
              borderRadius: 8,
            }}
          >
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <Icon
                name="shield-checkmark"
                size={20}
                color={colors['on-secondary-container']}
              />
              <Text
                style={{
                  color: colors['on-secondary-container'],
                  fontSize: 14,
                  fontWeight: '600',
                }}
              >
                GharSewa Safety Shield
              </Text>
            </View>
            <Text>
              Background verified professionals with fixed transparent pricing.
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.priceContainer}>
        <View
          style={{
            width: '60%',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Icon name="cart" size={20} color={colors['on-primary']} />
          <Text style={styles.priceText}>
            {totalItems} Service{totalItems !== 1 ? 's' : ''} added
          </Text>
        </View>
        <View
          style={{
            width: '40%',
            flexDirection: 'row',
            gap: 4,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          <Text style={[styles.priceText, { fontWeight: '600' }]}>
            Rs.{totalPrice}
          </Text>
          <Icon name="chevron-forward" size={20} color={colors['on-primary']} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 70,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  priceContainer: {
    position: 'absolute',
    paddingHorizontal: 16,
    bottom: 20,
    width: '90%',
    height: 56,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 4,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: colors['on-primary'],
    marginTop: -2,
  },
});

export default ServiceCategory;
