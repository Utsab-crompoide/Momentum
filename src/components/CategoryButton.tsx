import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';

interface CategoryButtonProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  icon,
  label,
  isActive = false,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle, isActive && styles.active]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        style={[styles.iconContainer, isActive && styles.iconContainerActive]}
      >
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={[styles.label, isActive && styles.labelActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colors['surface-container-low'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerActive: {
    backgroundColor: colors['tertiary'],
  },
  icon: {
    fontSize: 28,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors['on-surface'],
    textAlign: 'center',
  },
  labelActive: {
    color: colors['on-tertiary-container'],
  },
  active: {},
});

export default CategoryButton;
