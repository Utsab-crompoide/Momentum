import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';

interface UserHeaderProps {
  userName: string;
  location: string;
  userImage?: string;
  onLocationPress?: () => void;
}

const UserHeader: React.FC<UserHeaderProps> = ({
  userName,
  location,
  userImage,
  onLocationPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={
            userImage
              ? { uri: userImage }
              : { uri: 'https://picsum.photos/50/50' }
          }
          style={styles.avatar}
        />
        <View>
          <Text style={styles.brandName}>GharSewa</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSection} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.background,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  brandName: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.primary,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationIcon: {
    fontSize: 14,
  },
  location: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors['on-surface'],
  },
  rightSection: {
    width: 30,
  },
});

export default UserHeader;
