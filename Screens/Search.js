import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'

export default function Search({navigation}) {

  return (
    <SafeAreaView style = {{flex:1,}}>
        
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <Text>
            the add page.
        </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
