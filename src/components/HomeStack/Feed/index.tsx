import React from 'react'
import { FlatList, Button } from 'react-native'
import faker from 'faker'

import { Center } from '../../../common/Center'
import { HomeStackNavProps } from '../type'

export const Feed = ({ navigation }: HomeStackNavProps<'Feed'>) => {
  return (
    <Center>
      <FlatList
        style={{ width: '100%' }}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate('Product', {
                  name: item
                })
              }}
            />
          )
        }}
        keyExtractor={(product, index) => product + index}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  )
}
