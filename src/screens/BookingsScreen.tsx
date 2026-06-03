import { View, StyleSheet, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import colors from '@/theme/Colors';
import UserHeader from '@/components/UserHeader';
import SuccessModal from '@/components/SuccessModal';
import ErrorModal from '@/components/ErrorModal';

const BookingsScreen = () => {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
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
        <SuccessModal
          visible={successModalVisible}
          data={{
            title: 'Booking Successful!',
            description:
              'Your service has been scheduled. You can track your professional in the My Bookings tab.',
            primaryButtonText: 'View Bookings',
          }}
          onPress={() => {}}
          onCancel={() => {
            setSuccessModalVisible(false);
          }}
        />
        <ErrorModal
          visible={errorModalVisible}
          data={{
            title: 'Something went wrong',
            description:
              "We couldn't process your request at the moment. Please check your internet connection and try again.",
            primaryButtonText: 'Try Again',
          }}
          onPress={() => {}}
          onCancel={() => {
            setErrorModalVisible(false);
          }}
        />
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
});

export default BookingsScreen;
