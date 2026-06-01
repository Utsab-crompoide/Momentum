import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface SubCategoryCardProps {
  subCategory: {
    id: string;
    name: string;
    icon: string;
    startingPrice: number;
  };
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

const SubCategoryCard = ({
  subCategory,
  quantity = 0,
  onQuantityChange,
}: SubCategoryCardProps) => {
  const handleAddPress = () => {
    onQuantityChange?.(1);
  };

  const handleIncrement = () => {
    onQuantityChange?.(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onQuantityChange?.(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ width: '10%' }}>
        <Icon name={subCategory?.icon} size={24} color={colors.primary} />
      </View>
      <View style={{ width: '60%', flexDirection: 'column', gap: 4 }}>
        <Text style={{ color: colors.primary }}>{subCategory?.name}</Text>
        <Text>Rs. {subCategory?.startingPrice}</Text>
      </View>
      {quantity === 0 ? (
        <TouchableOpacity style={styles.button} onPress={handleAddPress}>
          <Text style={[styles.quantityButtonText, { fontSize: 14 }]}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleDecrement}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleIncrement}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors['outline-variant'],
    padding: 16,
    width: '100%',
    backgroundColor: colors['surface-container-lowest'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    alignItems: 'center',
  },
  button: {
    width: '20%',
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  quantityContainer: {
    width: '20%',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  quantityButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantityText: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
});

export default SubCategoryCard;
