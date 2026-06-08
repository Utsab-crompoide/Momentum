import { View, StyleSheet, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import colors from '@/theme/Colors';
import UserHeader from '@/components/UserHeader';
import SuccessModal from '@/components/SuccessModal';
import ErrorModal from '@/components/ErrorModal';
import DateTimePicker from '@/components/DateTimePicker';

const BookingsScreen = () => {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const route = useRoute();
  const { selectedServices, totalPrice, totalItems, categoryId, categoryName } =
    (route.params || {}) as any;

  // Log received data to verify it's working
  console.log('BookingsScreen Route Params:', {
    selectedServices,
    totalPrice,
    totalItems,
    categoryId,
    categoryName,
  });

  return (
    <View style={styles.container}>
      <UserHeader
        location="Kathmandu"
        userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
        showLocation={false}
      />
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        <View style={styles.topContainer}>
          <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 2 }}>
            Schedule Service ({categoryName})
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors['on-surface'],
              marginBottom: 4,
            }}
          >
            Select your preferred date and time for the service.
          </Text>
          {/* <Text
            style={{
              fontSize: 14,
              color: colors['on-surface'],
              fontWeight: '600',
            }}
          >
            Total Services: {totalItems} | Total Price: NPR {totalPrice}
          </Text> */}
        </View>
        <View style={styles.datePickerContainer}>
          <DateTimePicker locale="en-GB" label="Select Date" />
        </View>
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
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  datePickerContainer: {
    alignItems: 'center',
  },
  topContainer: {
    marginTop: 12,
    marginBottom: 10,
  },
});

export default BookingsScreen;
