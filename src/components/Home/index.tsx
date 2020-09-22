import React, { useContext } from 'react'
import { Button, Text } from 'react-native'

import { AuthContext } from '../../auth/AuthProvider'
import { Center } from '../../common/Center'

export function Home() {
  const { logout } = useContext(AuthContext)
  return (
    <Center>
      <Text>Home</Text>
      <Button title="Logout" onPress={logout} />
    </Center>
  )
}
