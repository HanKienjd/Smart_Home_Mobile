import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useSession from 'hooks/useSession';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createStackNavigator();

// eslint-disable-next-line react/no-multi-comp
const Navigation = () => {
  const { user, info } = useSession();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        {user || info ? (
          <>
            <Stack.Screen name="Home" component={AppStack} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
