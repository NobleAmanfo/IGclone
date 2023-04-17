import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
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