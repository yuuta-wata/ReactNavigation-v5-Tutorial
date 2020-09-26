import React, { useState } from 'react'
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

export const MyModal = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onDismiss={() => {
          console.log('Modal has Dismiss')
          // Alert.alert('Modal has Dismiss.')
        }}
        onShow={() => {
          console.log('shownd of Modal')
        }}
        // presentationStyle="overFullScreen"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
        }}>
        <View
          style={[
            {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              // marginTop: 22,
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              // backgroundColor: 'pink'
              backgroundColor: 'rgba(0, 0, 0, 0.2)'
            }
            // { backgroundColor: 'transparent' }
          ]}>
          <View style={[styles.modalView]}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableHighlight
              style={[{ ...styles.openButton, backgroundColor: '#2196F3' }]}
              onPress={() => {
                setModalVisible(!modalVisible)
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View style={{ top: -300 }}>
        <Button title="aaaa" onPress={() => {}} />
      </View>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true)
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: '#fff8dc'
  },
  modalView: {
    // flex: 1,
    // margin: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    // borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
    // elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})
