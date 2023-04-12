import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { USERS } from '../data/users'
import { POSTS } from '../data/posts'
import { Divider } from 'react-native-elements';

export const postFooterIcons = [
  {
    name: 'like',
    imageurl: '../assets/heartIcon2.png',
    likedimageurl: 'https://icons8.com/icon/hRLYqGuFwrzX/favorite'
  },
  {
    name: 'comment',
    imageurl: 'https://icons8.com/icon/143/speech-bubble'
  },
  {
    name: 'share',
    imageurl: 'https://icons8.com/icon/100004/email-send'
  },
  {
    name: 'save',
    imageurl: 'https://icons8.com/icon/72733/bookmark-outline'
  }
]
export default function Home({navigation}) {

  return (
    <SafeAreaView style={Styles.rootContainer}>
      {/* header */}
      <View style={Styles.rowContainer}>

        <TouchableOpacity>
          <Image style={Styles.logo} source={require('../assets/instagramWord.png')} />
        </TouchableOpacity>

        <View style={Styles.iconsContainer}>
          <TouchableOpacity onPress={()=> navigation.navigate('Camera')}>
            <Image style={Styles.icons} source={{ uri: 'http://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png' }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={Styles.icons} source={require('../assets/heartIcon2.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.unreadBadge}>
              <Text style={Styles.unreadBadgeText}>
                11
              </Text>
            </View>
            <Image style={Styles.icons} source={{ uri: 'http://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png' }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Story */}
      <View style={{ marginBottom: 13 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {USERS.map((story, index) => (
            <View key={index} style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Image style={Styles.story} source={{ uri: story.image }} />
              <Text style={{ color: 'white' }}>
                {story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* post */}

      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View>
          {POSTS.map((post, index) => (
            <View style={{ marginBottom: 20 }} >
              <View>
                <Divider width={1} orientation='vertical' />
              </View>

              <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                  <Image style={Styles.postLogo} source={{ uri: post.profile_picture }} />
                  <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>

                </View>
                <TouchableOpacity>
                  <Image style={[Styles.postIcon, { marginRight: 10 }]} source={require('../assets/menu.png')} />
                </TouchableOpacity>
              </View>
              <View style={{ width: '100%', height: 450 }}>
                <Image style={{ height: '100%', resizeMode: 'cover' }} source={{ uri: post.imageurl }} />
              </View>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
                <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'space-between' }}>
                  <TouchableOpacity>
                    <Image style={Styles.footerIcon} source={require('../assets/heartIcon2.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={Styles.footerIcon} source={require('../assets/comment.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={Styles.footerIcon} source={require('../assets/share.png')} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Image style={Styles.footerIcon} source={require('../assets/bookmark.png')} />
                </TouchableOpacity>

              </View>
              <View style={{ marginHorizontal: 15, flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white', fontWeight: '600' }}>
                  {post.likes.toLocaleString('en')} likes
                </Text>
              </View>
              <View style={{ marginHorizontal: 15, flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white', fontWeight: '600' }}>
                  {post.user}
                </Text>
                <Text style={{ color: 'white', marginLeft: 3 }}>
                  {post.caption}
                </Text>
              </View>
              {/* comments */}
              <View style={{ marginTop: 5, marginHorizontal: 15, }}>
                {!!post.comments.length && (
                  <Text style={{ color: 'gray' }}>
                    View
                    {post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
                    {post.comments.length > 1 ? 'comments' : 'comment'}
                  </Text>
                )}
              </View>
              {post.comments.map((comment, index)=>(
                <View key={index} style={{ flexDirection: 'row', marginTop: 5, marginHorizontal: 15, }}>
                <Text style={{ color: 'white', fontWeight: '600' }}>
                  {comment.user}
                </Text>
                <Text style={{ color: 'white', marginLeft: 3 }}>
                  {comment.comment}
                </Text>
              </View>
              ))}
              
            </View>
          ))}
        </View>
      </ScrollView>

      {/* <View>
      {POSTS.map((comment, index) => (
          
        ))}
        </View> */}
    </SafeAreaView>
  )
}


const Styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  rowContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icons: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 5
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600'
  },
  story: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#ff8501',
    marginLeft: 6
  },
  postLogo: {
    width: 35,
    height: 35,
    borderWidth: 1.6,
    borderRadius: 50,
    borderColor: '#ff8501',
    marginLeft: 6
  },
  postIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  footerIcon: {
    width: 33,
    height: 33
  }
})