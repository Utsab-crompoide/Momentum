import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ViewStyle,
  Dimensions,
} from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import ServiceCard from './ServiceCard';

export interface Service {
  id: string;
  image: string;
  title: string;
  price: string;
  rating?: number;
}

interface MostBookedSectionProps {
  largeCard: {
    image: string;
    title: string;
    originalPrice: string;
    discountedPrice: string;
    badge?: string;
  };
  services: Service[];
  onLargeCardPress?: () => void;
  onServicePress?: (service: Service) => void;
  containerStyle?: ViewStyle;
}

const MostBookedSection: React.FC<MostBookedSectionProps> = ({
  largeCard,
  services,
  onLargeCardPress,
  onServicePress,
  containerStyle,
}) => {
  const ServiceCardLarge = require('./ServiceCardLarge').default;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>Most Booked This Week</Text>

      <ServiceCardLarge
        image={largeCard.image}
        title={largeCard.title}
        originalPrice={largeCard.originalPrice}
        discountedPrice={largeCard.discountedPrice}
        badge={largeCard.badge}
        onPress={onLargeCardPress}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        {services.map(service => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            price={service.price}
            rating={service.rating}
            onPress={() => onServicePress?.(service)}
            containerStyle={styles.serviceCard}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const cardWidth = (Dimensions.get('window').width - 16 * 2 - 12) / 2;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors['on-surface'],
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  serviceCard: {
    width: cardWidth,
  },
});

export default MostBookedSection;
