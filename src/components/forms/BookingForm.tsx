import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import UserHeader from '../UserHeader';

const BookingForm = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <UserHeader
          location="Kathmandu"
          userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
        />
        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  bottomPadding: {
    height: 60,
  },
});

export default BookingForm;
