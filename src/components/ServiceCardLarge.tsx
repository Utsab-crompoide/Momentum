import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';

interface ServiceCardLargeProps {
  image: string;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  badge?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const ServiceCardLarge: React.FC<ServiceCardLargeProps> = ({
  image,
  title,
  originalPrice,
  discountedPrice,
  badge,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.overlay}>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>{originalPrice}</Text>
            <Text style={styles.discountedPrice}>{discountedPrice}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
    padding: 16,
  },
  badge: {
    backgroundColor: colors['tertiary-container'],
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors['on-tertiary-container'],
  },
  content: {
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#ffffff',
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'PlusJakartaSans-Regular',
    color: 'rgba(255, 255, 255, 0.7)',
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors['tertiary'],
  },
});

export default ServiceCardLarge;
