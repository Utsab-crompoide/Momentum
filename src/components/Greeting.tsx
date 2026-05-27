import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';

interface GreetingProps {
  userName: string;
  containerStyle?: ViewStyle;
}

const Greeting: React.FC<GreetingProps> = ({ userName, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>
        Namaste, {userName} <Text style={styles.wave}>👋</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors['on-surface'],
  },
  wave: {
    fontSize: 32,
  },
});

export default Greeting;
