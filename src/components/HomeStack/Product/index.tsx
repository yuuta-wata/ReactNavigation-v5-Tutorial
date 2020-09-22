import React from 'react'
import { Button, Text } from 'react-native'

import { Center } from '../../../common/Center'
import { HomeStackNavProps } from '../type'

export const Product = ({
  route,
  navigation
}: HomeStackNavProps<'Product'>) => {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit This Product"
        onPress={() =>
          navigation.navigate('EditProduct', {
            name: route.params.name
          })
        }
      />
    </Center>
  )
}
