/* eslint-disable react/no-multi-comp */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MAIN_SCREEN, NOTIFICATION_SCREEN, SETTINGS_SCREEN, STORE_SCREEN } from 'constants/screens';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';
import MainScreen from 'screens/MainScreen';
import NotificationScreen from 'screens/NotificationScreen';
import SettingScreen from 'screens/SettingScreen';
import StoreScreen from 'screens/StoreScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconStyleOn: {
    position: 'absolute',
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: 20,
    position: 'absolute',
  },
});

function IconsImageOn(index) {
  switch (index) {
    case 'Home':
      return (
        <Icon
          name="home"
          size={30}
          type="font-awesome"
          containerStyle={styles.iconStyleOn}
          color="#8C17D4"
        />
      );
    case 'Store':
      return (
        <Icon
          name="package"
          size={30}
          type="material-community"
          containerStyle={styles.iconStyleOn}
          color="#8C17D4"
        />
      );
    case 'Notification':
      return (
        <Icon
          name="notifications"
          size={30}
          type="ionicon"
          containerStyle={styles.iconStyleOn}
          color="#8C17D4"
        />
      );
    case 'Settings':
      return (
        <Icon
          name="settings"
          size={30}
          type="ionicon"
          containerStyle={styles.iconStyleOn}
          color="#8C17D4"
        />
      );
    default:
      break;
  }
}
function IconsImageOff(index) {
  switch (index) {
    case 'Home':
      return <Icon name="home" size={30} type="font-awesome" containerStyle={styles.iconStyle} />;
    case 'Store':
      return (
        <Icon
          name="package"
          size={30}
          type="material-community"
          containerStyle={styles.iconStyle}
        />
      );
    case 'Notification':
      return (
        <Icon name="notifications" size={30} type="ionicon" containerStyle={styles.iconStyle} />
      );
    case 'Settings':
      return <Icon name="settings" size={30} type="ionicon" containerStyle={styles.iconStyle} />;
    default:
      break;
  }
}

const BottomTabApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <View style={styles.iconContainer}>
            {focused ? IconsImageOn(route.name) : IconsImageOff(route.name)}
          </View>
        ),
        tabBarShowLabel: false,
        tabBarIconStyle: { marginRight: 35, marginVertical: 30 },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};
const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="BottomTabApp" component={BottomTabApp} />
    <Stack.Screen name={MAIN_SCREEN} component={MainScreen} />
    <Stack.Screen name={STORE_SCREEN} component={StoreScreen} />
    <Stack.Screen name={SETTINGS_SCREEN} component={SettingScreen} />
    <Stack.Screen name={NOTIFICATION_SCREEN} component={NotificationScreen} />
  </Stack.Navigator>
);

export default AppStack;
