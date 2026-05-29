import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text as RNText,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '@/theme/Colors';
import UserHeader from '@/components/UserHeader';
import Greeting from '@/components/Greeting';
import SearchBar from '@/components/SearchBar';
import CategoriesList, { Category } from '@/components/CategoriesList';
import MostBookedSection, { Service } from '@/components/MostBookedSection';
import WhyGharSewa from '@/components/WhyGharSewa';
import { getCategorySummaries } from '@/data/services';

const mostBookedLargeCard = {
  image:
    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=300&fit=crop',
  title: 'Full Deep Home Cleaning',
  originalPrice: 'Rs. 4500',
  discountedPrice: 'Rs. 3200',
  badge: 'Best Seller',
};

const mostBookedServices: Service[] = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=160&fit=crop',
    title: 'AC Service & Repair',
    price: 'Rs. 1500',
    rating: 4.9,
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=200&h=160&fit=crop',
    title: 'Kitchen Tap Leak Fix',
    price: 'Rs. 800',
    rating: 4.8,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const categories = getCategorySummaries();

  const handleCategoryPress = (category: Category) => {
    console.log('Category selected:', category.name);
    navigation.navigate('ServiceCategory', { categoryId: category.id });
  };

  const handleServicePress = (service: Service) => {
    console.log('Service selected:', service.title);
  };

  const handleLargeCardPress = () => {
    console.log('Large card pressed');
  };

  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  const handleSeeAllCategories = () => {
    console.log('See all categories pressed');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <UserHeader
          location="Kathmandu"
          userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
        />

        <Greeting userName="Utsab" />

        <SearchBar
          placeholder="What do you need help with?"
          value={searchValue}
          onChangeText={setSearchValue}
          editable
        />

        <CategoriesList
          categories={categories}
          onCategoryPress={handleCategoryPress}
          onSeeAllPress={handleSeeAllCategories}
        />

        <MostBookedSection
          largeCard={mostBookedLargeCard}
          services={mostBookedServices}
          onLargeCardPress={handleLargeCardPress}
          onServicePress={handleServicePress}
        />

        <WhyGharSewa />

        <View style={styles.bottomPadding} />
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <RNText style={styles.fabIcon}>+</RNText>
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
    paddingBottom: 20,
  },
  bottomPadding: {
    height: 60,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
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
  fabIcon: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors['on-primary'],
    marginTop: -2,
  },
});

export default HomeScreen;
