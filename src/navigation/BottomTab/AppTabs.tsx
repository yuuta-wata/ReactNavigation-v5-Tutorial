import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import { AppParamList } from './AppParamList'
import { Search } from '../../components/Search'
import { HomeStack } from '../../components/HomeStack'

interface Props {}

const Tabs = createBottomTabNavigator<AppParamList>()

export const AppTabs: React.FC<Props> = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline'
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search-sharp' : 'ios-search-outline'
          }
          return <Icon name={iconName} size={size} color={color} />
        }
      })}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  )
}
