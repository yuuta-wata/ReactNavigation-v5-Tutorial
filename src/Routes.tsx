import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'

interface Props {}

const Stack = createStackNavigator()

function Login() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text>I am a Login Screen</Text>
    </View>
  )
}

export const Routes: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
