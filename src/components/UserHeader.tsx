import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface UserHeaderProps {
  title?: string;
  location: string;
  userImage?: string;
  onLocationPress?: () => void;
  isSecondary?: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = ({
  title = 'GharSewa',
  location,
  userImage,
  onLocationPress,
  isSecondary = false,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {!isSecondary ? (
          <Image
            source={
              userImage
                ? { uri: userImage }
                : { uri: 'https://picsum.photos/50/50' }
            }
            style={styles.avatar}
          />
        ) : (
          //Back button for secondary header
          <TouchableOpacity
            style={[
              styles.avatar,
              {
                backgroundColor: colors['surface'],
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="arrow-back" size={24} color={colors['on-surface']} />
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.brandName}>{title}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={{ fontSize: 24 }}>🔎</Text>
      </View>
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
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
