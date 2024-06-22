import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './tabs/home/home.screen';
import {HomeTabParamList, RootStackScreenProps} from '../../navigation/types';
import {Colors} from '../../utils/colors';
import {Events} from './tabs/events/events.screen';
import {Icon} from 'components/Icon/icon.component';

const BottomTabNavigator = createBottomTabNavigator<HomeTabParamList>();

export const HomeTabs = ({}: RootStackScreenProps<'HomeTabs'>) => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.Black,
          shadowColor: Colors.Yellow,
        },
        headerTitleStyle: {color: Colors.Yellow},
        tabBarActiveTintColor: Colors.Violet,
        tabBarInactiveTintColor: Colors.LightGray,
        tabBarActiveBackgroundColor: Colors.Black,
        tabBarInactiveBackgroundColor: Colors.Black,
        tabBarStyle: {borderTopWidth: 0},
      }}>
      <BottomTabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Fiaca',
          tabBarIcon: ({focused}) => (
            <Icon
              name="FiacaI"
              size="XXXL"
              color={focused ? 'Violet' : 'LightGray'}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Events"
        component={Events}
        options={{
          title: 'Eventos',
          tabBarIcon: ({focused}) => (
            <Icon
              name="Calendar"
              size="L"
              color={focused ? 'Violet' : 'LightGray'}
            />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};
