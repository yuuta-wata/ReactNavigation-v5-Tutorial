import React, { useContext } from 'react'
import { Button, Text } from 'react-native'

import { AuthNavProps } from '../../auth/AuthParamList'
import { AuthContext } from '../../auth/AuthProvider'
import { Center } from '../../common/Center'

export function Login({ navigation, route }: AuthNavProps<'Login'>) {
  const { login } = useContext(AuthContext)
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button title="Log me in" onPress={login} />
      <Button
        title="Go!!! Register Screen"
        onPress={() => navigation.navigate('Register')}
      />
    </Center>
  )
}
