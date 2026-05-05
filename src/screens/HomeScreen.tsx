import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  console.log('HomeScreen rendered');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default HomeScreen;
