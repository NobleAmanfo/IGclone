import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Image } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'


export default function Camera() {
  const PLACEHOLDER = 'https://picsum.photos/200/300'

  const uploadPostScheme = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'caption has reached the character limit')
  })

  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER)
  return (
    // 
    <SafeAreaView style = {Styles.rootContainer}>
        {/* <Text style = {{color: 'white'}}>
            The camera page 
        </Text> */}
        <Formik
        initialValues={{caption: '', imageUrl: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={uploadPostScheme}
        >
          {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
            <>
            <View style = {{flexDirection: 'row', height: '20%'}}>
              {/* <Image /> */}
              <Image source ={{uri: PLACEHOLDER}} style = {{width: '40%', borderRadius: 5,}}/>

              
              <View style ={{alignSelf: 'flex-start', marginLeft: 10, color: 'white' }}><TextInput placeholder = 'Write a Caption' placeholderTextColor={'gray'} multiline={true}/></View>
            </View>
            
            <TextInput placeholder = 'Enter Image Url' placeholderTextColor={'gray'}/>


            
            </>
          )}
        </Formik>

        {/* FormikUploader */}
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  })