import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'

export default function Reels({navigation}) {

  return (
    <SafeAreaView style = {{flex:1,}}>
        
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <Text>
            the Reels page.
        </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
