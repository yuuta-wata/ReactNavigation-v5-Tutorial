import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
}

export const Center: React.FC<Props> = ({ style, children }) => {
  return (
    <View
      style={[
        style,
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }
      ]}>
      {children}
    </View>
  )
}
