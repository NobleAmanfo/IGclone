import React from 'react'
import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Landing from '../Screens/Landing';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
import Camera from '../Screens/Camera';
import Reels from '../Screens/reels';
import Shop from '../Screens/Shop';
import { View } from 'react-native';
import { USERS } from '../data/users'
import { POSTS } from '../data/posts'
import { StyleSheet, Image } from 'react-native';



export default function Routes() {

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    const [pLogo, setpLogo] = useState('');


    // useEffect(() => {
    //     // Update the document title using the browser API
    //     fetchData();
    // }, []);

    // const fetchData = () => {
    //     let url = '../data/posts'
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             console.log('JSON', json)
    //             let profile = json.POSTS[0];
    //             setpLogo(profile)
                

    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }

    // function CameraStack() {
    //     return (
    //         <Stack.Navigator>
    //             <Stack.Screen name="Add" component={Add} />

    //         </Stack.Navigator>
    //     );
    // }

    const HomeTabs = () => {
        return (
            <Tab.Navigator
                initialRouteName={Home}
                screenOptions={{
                    tabBarInactiveTintColor: 'grey',
                    tabBarActiveTintColor: '#94a274',
                    tabBarStyle: {
                        backgroundColor: 'black',
                        position: 'absolute',
                        paddingTop: 20
                    },
                }}
            >
                <Tab.Screen name='Home' component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                        tabBarIcon: ({focused }) => (
                                focused?
                                <Image style={{ width: 26, height: 26 }} source={require('../assets/home.png')} />
                                : <Image style={{ width: 26, height: 26 }} source={require('../assets/homeOutline.png')} />
                        ),
                    }}
                />
                <Tab.Screen name='Search' component={Search}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                        tabBarIcon: ({focused }) => (
                            focused?
                                <Image style={{ width: 26, height: 26 }} source={require('../assets/searchFilled.png')} />
                                : <Image style={{ width: 26, height: 26 }} source={require('../assets/search.png')} />
                        ),
                    }}
                />
                <Tab.Screen name='Reels' component={Reels}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                        tabBarIcon: ({ focused }) => (
                            focused?
                            <Image style={{width: 26, height: 26}} source={ require('../assets/reelsFilled.png') } /> 
                            : <Image style={{ width: 26, height: 26 }} source={require('../assets/reels.png')} />                     
                        ),
                    }}
                />
                <Tab.Screen name='Shop' component={Shop}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                        tabBarIcon: ({ focused }) => (
                            focused?
                            <Image style={{width: 26, height: 26}} source={ require('../assets/bagFilled.png') } />  
                            : <Image style={{ width: 26, height: 26 }} source={require('../assets/bag.png')} />                   
                        ),
                    }}
                />
                <Tab.Screen name='Profile' component={Profile}
                    options={{
                        headerShown: false,
                        tabBarLabel: '',
                        tabBarIcon: ({ }) => (

                            <View style={{ alignItems: 'center' }}>
                                <Image style={Styles.postLogo} source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQEHCDSLuWP4uA/profile-displayphoto-shrink_800_800/0/1675371925887?e=2147483647&v=beta&t=hLE_rOVjX_RZKJBmqxgVwaiwVUUJn0DoApynaZ0A3nY' }} />
                            </View>
                            //   <Ionicons name='person-circle-outline' size={26} color="white" />
                        ),
                    }}
                />

                {/* <Tab.Screen name='Players' component={PlayerStack}
                  options={{
                      headerShown:false,
                      tabBarLabel: 'Players',
                      tabBarIcon: ({ color }) => (
                          <Ionicons name='person' size={26} color={color} />
                      ),
                  }}
              /> */}
                {/* <Tab.Screen name='Favorites' component={Favorites}
                  options={{
                      headerShown:false,
                      tabBarLabel: 'Favorites',
                      tabBarIcon: ({ color }) => (
                          <Ionicons name='star' size={26} color={color} />
                      ),
                  }}
              /> */}
            </Tab.Navigator>
        )
    }


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTabs} />
                <Stack.Screen options={{ headerShown: false }} name="Camera" component={Camera} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}


const Styles = StyleSheet.create({
    postLogo: {
        width: 30,
        height: 30,
        borderWidth: 1.6,
        borderRadius: 50,
        borderColor: '#ff8501',
        marginLeft: 6

    },
})