import React, { useState } from 'react'
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  View
} from 'react-native'

interface DataProps {
  id?: string
  title: string
}

type Props = DataProps[]

const MyData: Props = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  }
]

const ItemList = ({ title }: DataProps) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>{title}</Text>
    </View>
  )
}

const RenderItem = ({ title }: DataProps) => <ItemList title={title} />

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: 'pink'
      }}
    />
  )
}

const ListHeader = () => <Text>ヘッダー</Text>

const ListFooter = () => <Text>フッター</Text>

export const MyFlatList = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const onRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 5000)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        ListHeaderComponentStyle={{ margin: 20 }}
        style={{ flex: 1 }}
        data={MyData}
        renderItem={({ item }) => <RenderItem title={item.title} />}
        keyExtractor={(item) => item.id!}
        extraData={MyData.map((x) => x.id)}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
      <FlatList
        horizontal={true}
        // ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        ListHeaderComponentStyle={{ margin: 20 }}
        style={{ flex: 1 }}
        data={MyData}
        renderItem={({ item }) => <RenderItem title={item.title} />}
        keyExtractor={(item) => item.id!}
        extraData={MyData.map((x) => x.id)}
      />
    </SafeAreaView>
  )
}
