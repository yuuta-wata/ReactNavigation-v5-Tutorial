import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import { Center } from '../common/Center'
import { AuthContext } from '../auth/AuthProvider'
import { AuthStack } from '../auth/AuthStack'
import { DrawerApp } from './Drawer'

interface Props { }

export const Routes: React.FC<Props> = () => {
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Check if the user is logged in or out
    AsyncStorage.getItem('user')
      .then((userString) => {
        if (userString) {
          // decode it
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log('error:', err)
      })
  }, [])

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    )
  }

  return (
    <NavigationContainer>
      {user ? <DrawerApp /> : <AuthStack />}
    </NavigationContainer>
  )
}
