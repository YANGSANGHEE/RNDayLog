import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from './FeedsScreen';
import CalenderScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainTap = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'salmon',
      }}>
      <Tab.Screen
        name="피드"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="view-stream" size={size}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="달력"
        component={CalenderScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="event" size={size}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="검색"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="search" size={size}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTap;
