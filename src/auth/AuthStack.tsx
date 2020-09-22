import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthParamList } from './AuthParamList'
import { Login } from '../components/Login'
import { Register } from '../components/Register'

interface Props {}

const Stack = createStackNavigator<AuthParamList>()

export const AuthStack: React.FC<Props> = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerTitle: 'Sign In' }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerTitle: 'Sign Up' }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  )
}
