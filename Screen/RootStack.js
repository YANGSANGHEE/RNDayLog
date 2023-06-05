import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTap from './MainTab';
import WriteScreen from './WriteScreen';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
