import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

export default function Camera() {
  return (
    // 
    <SafeAreaView style = {Styles.rootContainer}>
        <Text>
            The camera page 
        </Text>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  })