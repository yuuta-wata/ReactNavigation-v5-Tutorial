import React from 'react'
import { Text } from 'react-native'
import { Center } from '../../../common/Center'
import { HomeStackNavProps } from '../type'

export const EditProduct = ({ route }: HomeStackNavProps<'EditProduct'>) => {
  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  )
}
