import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  containerStyle?: ViewStyle;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors['secondary-container'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors['on-surface'],
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors['on-surface-variant'],
    lineHeight: 18,
  },
});

export default BenefitCard;
