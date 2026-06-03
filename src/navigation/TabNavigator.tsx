import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '@/theme/Colors';

import HomeScreen from '@/screens/HomeScreen';
import BookingsScreen from '@/screens/BookingsScreen';
import AlertsScreen from '@/screens/AlertsScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import ServiceCategory from '@/screens/ServiceSelectionScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const BookingsStack = createNativeStackNavigator();
const AlertsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

interface TabLabelProps {
  focused: boolean;
  tintColor?: string;
}

const TabLabel: React.FC<{ label: string; focused: boolean }> = ({
  label,
  focused,
}) => (
  <Text
    style={[
      styles.tabLabel,
      {
        color: focused ? colors.tertiary : colors['on-surface-variant'],
      },
    ]}
  >
    {label}
  </Text>
);

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreenMain" component={HomeScreen} />
      <HomeStack.Screen name="ServiceCategory" component={ServiceCategory} />
    </HomeStack.Navigator>
  );
}

function BookingsStackNavigator() {
  return (
    <BookingsStack.Navigator screenOptions={{ headerShown: false }}>
      <BookingsStack.Screen
        name="BookingsScreenMain"
        component={BookingsScreen}
      />
    </BookingsStack.Navigator>
  );
}

function AlertsStackNavigator() {
  return (
    <AlertsStack.Navigator screenOptions={{ headerShown: false }}>
      <AlertsStack.Screen name="AlertsScreenMain" component={AlertsScreen} />
    </AlertsStack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreenMain" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelPosition: 'below-icon',

        tabBarIcon: ({ color, size, focused }) => {
          let iconName: string = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Bookings') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Alerts') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarLabel: ({ focused }) => {
          const labels: { [key: string]: string } = {
            Home: 'Home',
            Bookings: 'Bookings',
            Alerts: 'Alerts',
            Profile: 'Profile',
          };
          return <TabLabel label={labels[route.name]} focused={focused} />;
        },

        tabBarActiveTintColor: colors.tertiary,
        tabBarInactiveTintColor: colors['on-surface-variant'],
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors['outline-variant'],
          height: 70,
          paddingTop: 8,
          paddingBottom: 12,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingsStackNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Bookings" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={AlertsStackNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Alerts" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Profile" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'PlusJakartaSans-Medium',
    marginTop: 4,
  },
});
