import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';

const BookingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: colors['on-surface'],
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default BookingsScreen;
