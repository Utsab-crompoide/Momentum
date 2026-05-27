import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import BenefitCard from './BenefitCard';

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface WhyGharSewaProps {
  containerStyle?: ViewStyle;
}

const benefits: Benefit[] = [
  {
    id: '1',
    icon: '✓',
    title: 'Verified Workers',
    description: 'Every professional is background checked and skill-tested.',
  },
  {
    id: '2',
    icon: '💳',
    title: 'Fixed Pricing',
    description: 'No hidden costs. Know exactly what you pay before you book.',
  },
  {
    id: '3',
    icon: '⏰',
    title: 'On-Time Guarantee',
    description: 'If we are late, you get a discount on your next service.',
  },
];

const WhyGharSewa: React.FC<WhyGharSewaProps> = ({ containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>Why GharSewa?</Text>

      <View style={styles.benefitsContainer}>
        {benefits.map(benefit => (
          <BenefitCard
            key={benefit.id}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            containerStyle={styles.benefitCard}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['surface-container'],
    marginVertical: 12,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors['on-surface'],
    marginBottom: 16,
    textAlign: 'center',
  },
  benefitsContainer: {
    gap: 16,
  },
  benefitCard: {
    marginVertical: 4,
  },
});

export default WhyGharSewa;
