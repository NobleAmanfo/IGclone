import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebaseConfig';
import {useNavigation} from '@react-navigation/core'


export default function Login() {
    const navigation = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //   const [username, setUserame] = useState('');
    
    const Login = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then(() => navigation.replace('Home'),
            )
            .then((re) => {
                console.log(re);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', }}>
            <TextInput style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}>

            </TextInput>
            <TextInput style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}>

            </TextInput>
            <TouchableOpacity style={styles.button1} onPress={Login}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        width: 380,
        borderRadius: 10,
        elevation: 15,
        backgroundColor: 'white',
        marginTop: 8,
        // borderColor: 'black',
        // borderWidth: 1,
    },
    input: {
        marginTop: 20,
        paddingVertical: 12,
        width: 300,
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
})