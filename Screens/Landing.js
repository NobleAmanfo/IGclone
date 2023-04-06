import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
                    <Text >
                        Register
                    </Text>
                </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text >
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        width: "50%",
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#94a274',
        marginBottom: 10
    },
})