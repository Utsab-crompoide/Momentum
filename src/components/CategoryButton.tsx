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
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  icon,
  label,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={[styles.label]}>{label}</Text>
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
});

export default CategoryButton;
