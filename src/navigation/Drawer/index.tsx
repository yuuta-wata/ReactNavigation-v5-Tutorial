import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, useIsDrawerOpen, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'

import { AppTabs } from '../BottomTab/AppTabs'
import { DrawerProps } from './type'
import { Center } from '../../common/Center'
import { Button } from 'react-native'

const Drawer = createDrawerNavigator<DrawerProps>()

const DrawerPage = ({ navigation }: DrawerContentComponentProps) => {
  const isDrawerOpen = useIsDrawerOpen()
  console.log('isDrawerOpen:', isDrawerOpen)
  return (
    <Center>
      <Button title="Drawer Open" onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer())
      }} />
    </Center>
  )
}

const CustomDrawerContent = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Button title="close" onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())} />
      <DrawerItem label="test" onPress={() => { }} />
    </DrawerContentScrollView>
  )
}

export const DrawerApp = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />} drawerContentOptions={{
      style: { backgroundColor: 'pink' }
    }}>
      <Drawer.Screen name="Home" component={AppTabs} />
      <Drawer.Screen name="DrawerPage" component={DrawerPage} />
    </Drawer.Navigator>
  )
}
