import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Center } from '../common/Center'

export const Loading = () => {
  return (
    <Center>
      <ActivityIndicator size="large" color="#0000ff" />
    </Center>
  )
}