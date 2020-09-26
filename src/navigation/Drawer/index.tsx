import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  useIsDrawerOpen,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'

import { AppTabs } from '../BottomTab/AppTabs'
import { DrawerProps } from './type'
import { Center } from '../../common/Center'
import { Button } from 'react-native'
import { Loading } from '../../components/Loading'
import { MyButton } from '../../components/MyButton'
import { MyFlatList } from '../../components/MyFlatList'
import { MyRefreshControl } from '../../components/MyRefreshControl'
import { MyImage } from '../../components/MyImage'

const Drawer = createDrawerNavigator<DrawerProps>()

const DrawerPage = ({ navigation }: DrawerContentComponentProps) => {
  const isDrawerOpen = useIsDrawerOpen()
  console.log('isDrawerOpen:', isDrawerOpen)
  return (
    <Center>
      <Button
        title="Drawer Open"
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer())
        }}
      />
    </Center>
  )
}

const CustomDrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>
) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Button
        title="close"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem label="test" onPress={() => {}} />
    </DrawerContentScrollView>
  )
}

export const DrawerApp = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        style: {}
      }}>
      <Drawer.Screen name="Home" component={AppTabs} />
      <Drawer.Screen name="DrawerPage" component={DrawerPage} />
      <Drawer.Screen name="Loading" component={Loading} />
      <Drawer.Screen name="MyButton" component={MyButton} />
      <Drawer.Screen name="MyFlatList" component={MyFlatList} />
      <Drawer.Screen name="MyRefrashControl" component={MyRefreshControl} />
      <Drawer.Screen name="MyImage" component={MyImage} />
    </Drawer.Navigator>
  )
}
