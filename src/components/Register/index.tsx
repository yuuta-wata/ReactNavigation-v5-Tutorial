import React from 'react'
import { Button, Text } from 'react-native'

import { AuthNavProps } from '../../auth/AuthParamList'
import { Center } from '../../common/Center'

export function Register({ navigation, route }: AuthNavProps<'Register'>) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button title="GO!!! Login Screen" onPress={() => navigation.goBack()} />
    </Center>
  )
}
