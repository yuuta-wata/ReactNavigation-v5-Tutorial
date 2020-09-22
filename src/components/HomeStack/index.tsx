import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Feed } from './Feed'
import { Text, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../auth/AuthProvider'
import { HomeParamList } from './type'
import { Product } from './Product'
import { EditProduct } from './EditProduct'

const Stack = createStackNavigator<HomeParamList>()

export const HomeStack: React.FC = () => {
  const { logout } = useContext(AuthContext)
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`
        })}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={logout} style={{ marginRight: 10 }}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            )
          }
        }}
        component={Feed}
      />
    </Stack.Navigator>
  )
}
