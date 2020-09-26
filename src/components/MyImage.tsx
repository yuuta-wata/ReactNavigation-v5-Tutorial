import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { Center } from '../common/Center'

export const MyImage = () => {
  const [brlueRedius, setBlurRedius] = useState<number>(10)
  const onLayout = () => {
    setTimeout(() => setBlurRedius(0), 3000)
  }
  const onLoadStart = () => {
    console.log('onLoadStart')
  }
  const onLoad = () => {
    console.log('onLoad')
  }
  const onLoadEnd = () => {
    console.log('onLoadEnd')
  }
  return (
    <Center>
      <View style={{ borderColor: 'pink', borderWidth: 3, padding: 5 }}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require('../images/myLogo.png')}
          blurRadius={brlueRedius}
          onLayout={onLayout}
          onLoadStart={onLoadStart}
          onLoad={onLoad}
          onLoadEnd={onLoadEnd}
          onProgress={(event) => console.log(event.nativeEvent.loaded)}
          resizeMode="contain"
          resizeMethod="scale"
        />
      </View>
    </Center>
  )
}
