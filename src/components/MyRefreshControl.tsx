import React, { useState, useCallback } from 'react'
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'

const wait = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })

export const MyRefreshControl = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(3000).then(() => setRefreshing(false))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            title="ロード中..."
            colors={['#ff6347', '#ffc0cb']}
            tintColor="#ff6347"
            titleColor="#ffc0cb"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
