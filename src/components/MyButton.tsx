import React from 'react'
import { Alert, Button } from 'react-native'
import { Center } from '../common/Center'

export const MyButton = () => {
  return (
    <Center>
      <Button title="Click Me!!!" accessibilityLabel="accessibility" disabled={false} onPress={() => Alert.alert('Button Pressed!!!')} />
    </Center>
  )
}